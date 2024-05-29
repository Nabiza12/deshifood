const Order = require('../models/orderModel');

//get all orders
const getOrders = async (req, res) => {
  try {
      const orders = await Order.find({});
      res.status(200).json(orders);
  }
  catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error', err.message);
  }
}

//get a order by id
const getOrderById = async (req, res) => {
  const { id } = req.params;
  console.log("id----->", id)
  try {
    const order = await Order.findById(id);
    res.status(200).json(order);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err.message);
  }
}

//create a order
const createOrder = async (req, res) => {
  const {userId,phone, orderItems,isCancelled, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, paymentStatus} = req.body;
  console.log("req.body", req.body);
  try {
      const order = new Order({
          isCancelled,
          orderItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
          paymentStatus,
          userId,
          phone,
      });
      await order.save();
      res.status(200).json(order);
  }
  catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error', err.message);
  }
  
}

//get orders by user id
const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;
  console.log("userId----->", userId)
  try {
    const orders = await Order.find({userId});
    res.status(200).json(orders);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err.message);
  }
}

//update a order isCancelled by id
const updateOrderIsCancelled = async (req, res) => {
  //if already cancelled, then don't update
  const { id } = req.params;
  console.log("id----->", id)
  try {
    const order = await Order.findById(id);
    if (order) {
      if (order.isCancelled) {
        //throw error that order is already cancelled
        res.status(400).json({ message: 'Order is already cancelled' });
      } else {
        order.isCancelled = true;
        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
      }
    }
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err.message);
  }
}

//update a order by id
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { orderItems,phone, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice,paymentStatus,isCancelled } = req.body;
  console.log("req.body", req.body);
  try {
      const order = await Order.findById(id);
      if(order) {
          order.orderItems = orderItems;
          order.shippingAddress = shippingAddress;
          order.paymentMethod = paymentMethod;
          order.itemsPrice = itemsPrice;
          order.taxPrice = taxPrice;
          order.shippingPrice = shippingPrice;
          order.totalPrice = totalPrice;
          order.paymentStatus = paymentStatus;
          order.isCancelled = isCancelled;
          order.phone = phone;
          const updatedOrder = await order.save();
          res.status(200).json(updatedOrder);
      }
  }
  catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error', err.message);
  }
}

//delete a order by id
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  console.log("id----->", id)
  try {
    //findByIdAndDelete
    const order = await Order.findByIdAndDelete(id);
    res.status(200).json(order);
    
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err.message);
  }
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUserId,
  updateOrderIsCancelled
}