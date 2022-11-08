const mongoose = require('mongoose');
const validator = require('validator');
const parishesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Kindly provide the name of the parish'],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: [true, 'Kindly Upload the image of the parish'],
  },
  address: {
    type: String,
    required: [true, 'Kindly provide the address of the parish'],
  },
  website: {
    type: String,
    // validator: validator.isUrl,
  },
  email: {
    type: String,
    required: [true, 'Kindly provide the email address of the parish'],
    // validate: validator.isEmail,
  },
  phone: {
    type: Number,
    required: [true, 'Kindly provide the phone number of the parish'],
    // validate: validator.isMobile,
  },
  location: {
    type: String,
  },
  parishOfficeHours: [
    {
      type: String,
      required: [true, 'Kindly provide the office hours of the parish'],
    },
  ],
  daysOfMass: [
    {
      type: String,
      required: [true, 'Kindly provide the days of mass of the parish'],
    },
  ],
  confessionDays: [
    {
      type: String,
      required: [true, 'Kindly provide the confession days of the parish'],
    },
  ],
});
const Parish = mongoose.model('Parish', parishesSchema);
module.exports = Parish;
