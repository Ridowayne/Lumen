const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin', 'parishes'],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
