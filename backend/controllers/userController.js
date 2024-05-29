const User = require("../models/userModel");

//create a user
const createUser = async (req, res) => {
    const {email,address, role, phone } = req.body;
    console.log("req.body", req.body);
    try {
        const user = new User({
        email,
        role,
        address,
        phone,
        });
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}

//get a user by id
const getUserById = async (req, res) => {
    const { id } = req.params;
    console.log("id----->", id);
    try {
      const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}

//update a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password,address, role, avatar,phone } = req.body;
    console.log("req.body", req.body);
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, password, role, address, avatar,phone },
            { new: true }
        );
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
    console.log("id----->", id);
    try {
      const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}

//get user by email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    console.log("email----->", email);
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error", err.message);
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail
}