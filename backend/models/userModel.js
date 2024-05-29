const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['user', 'admin'],
    default: 'user',
  },
  address: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);