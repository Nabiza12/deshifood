const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, getUserByEmail } = require('../controllers/userController');

const router = express.Router();

//get all users
router.get('/', getAllUsers);

//get a user by id
router.get('/:id', getUserById);

//create a user
router.post('/', createUser);

//update a user by id
router.patch('/:id', updateUser);

//delete a user by id
router.delete('/:id', deleteUser);

//get a user by email
router.get('/email/:email', getUserByEmail);

module.exports = router;
