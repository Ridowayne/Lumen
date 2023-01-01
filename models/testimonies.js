const mongoose = require('mongoose');
const testimonySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Kindly provide us with your name'],
    },
    testimony1: {
      type: String,
      required: [true, 'Kindly provide us with your testimony'],
    },
    testimony2: {
      type: String,
    },
    isRead:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Testimony = mongoose.model('Testimony', testimonySchema);
module.exports = Testimony;
