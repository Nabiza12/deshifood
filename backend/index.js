require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const citiesRoutes = require("./routes/cities");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const bodyParser = require("body-parser")
const Order = require('./models/orderModel');
const SSLCommerzPayment = require('sslcommerz-lts')
const stripe = require("stripe")("sk_test_51N5WcSDOcQTPK206K0jbb0IG0hwmigD0R9YERdOhgD1wrrMtzvrNGNCsoiw2Ge6Xqo4QsdVVysVxPXpLkDH4MsYE00OfP1HDfC");

const store_id = 'deshi64593c8c32b7e'
const store_passwd = 'deshi64593c8c32b7e@ssl'
const is_live = true //true for live, false for sandbox
const app = express();
const port = 4000;

// middleware for parsing json
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.use(express.json());

// middleware for logger
app.use((req, res, next) => {
  console.log(
    `${req.method} request for '${req.url}'`
  );
  next();
});

//routes
app.use("/api/cities", citiesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);

app.post("/payment", async (req, res) => {
  const {userId, orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, paymentStatus,amount,id} = req.body;
  console.log("req.body", req.body)
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true
    })
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paymentStatus,
      userId,
      isCancelled: false,
    });
    await order.save();
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})

//initial route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});


// connect to db
mongoose.connect('mongodb+srv://hadidbilla449:BEiyF7KARYI36qhk@cluster0.vu0k9gn.mongodb.net/test',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // start server
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
})

module.exports = app;

