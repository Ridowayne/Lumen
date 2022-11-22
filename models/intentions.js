const mongoose = require('mongoose');
const intentionScema = new mongoose.Schema(
  {
    petitioner: {
      type: String,
      required: [true, 'Kindly provide your name'],
    },
    prayerRequest: {
      type: String,
      required: [true, 'Kindly provide your prayer request'],
    },
    daysFrom: {
      type: Date,
      required: [
        true,
        'Kindly select the days that you want your prayers to start from',
      ],
    },
    daysTo: {
      type: Date,
      required: [
        true,
        'Kindly select the days that you want your prayers to end',
      ],
    },
    uniqueCode: {
      type: String,
      required: [
        true,
        'Kindly provide the generated unique code for your prayer',
      ],
    },
    parish: {
      type: mongoose.Schema.ObjectId,
      ref: 'Parish',
      required: [
        true,
        'Kindly kindly select the parish where yo want your prayer to be done',
      ],
    },
    prayerTime: {
      type: String,
      required: [true, 'Kindly provide the prayer time'],
      enum: ['Weekdays', 'Sunday'],
    },
    receiptOfPayment: {
      type: String,
      required: [true, 'Kindly provide the receipt of payment'],
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Intention = mongoose.model('Intention', intentionScema);
module.exports = Intention;
