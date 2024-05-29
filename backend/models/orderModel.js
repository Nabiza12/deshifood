const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
  },
  orderItems: [
    {
      id: String,
      name: String,
      image: String,
      price: Number,
      qty: Number,
    },
  ],
  shippingAddress: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  itemsPrice: {
    type: Number,
  },
  shippingPrice: {
    type: Number,
  },
  paymentStatus: {
    type: Boolean,
  },
  isCancelled: {
    type: Boolean,
  },
  phone: {
    type: String,
    
  }
});

module.exports = mongoose.model("Order", orderSchema);