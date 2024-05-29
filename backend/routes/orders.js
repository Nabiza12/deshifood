const express = require('express');
const {createOrder, getOrders, getOrderById, updateOrder, deleteOrder, updateOrderIsCancelled, getOrdersByUserId} = require('../controllers/orderController');

const router = express.Router();

//get all orders
router.get('/', getOrders);

//get a order by id
router.get('/:id', getOrderById);

//create a order
router.post('/', createOrder);

//update a order by id
router.patch('/:id', updateOrder);

//delete a order by id
router.delete('/:id', deleteOrder);

//get orders by user id
router.get('/user/:userId', getOrdersByUserId);

//update a order isCancelled by id
router.patch('/cancel/:id', updateOrderIsCancelled);

module.exports = router;