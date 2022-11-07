const mongoose = require('mongoose');
const validator = require('validator');
const parishesSchema = new mongoose.Schema({
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
    validate: [validate.isUrl, 'Kindly provide the website of the parish'],
  },
  email: {
    type: String,
    required: [true, 'Kindly provide the email address of the parish'],
    validate: [
      validator.isEmail,
      'Kindly provide a valid email address of the parish',
    ],
  },
  phone: {
    type: Number,
    required: [true, 'Kindly provide the phone number of the parish'],
    validate: [
      validator.isMobile,
      'Kindly provide a valid phone number of the parish',
    ],
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
