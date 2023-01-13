const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema(
  {
    charityOrganisation: {
      type: String,
      required: [
        true,
        'Kindly provide the organisation and  type of charity that you wish to accomplish',
      ],
    },
    amount: {
      type: Number,
      required: [true, 'Kindly provide the amount that you wish to donate'],
    },
    uniqueCode: {
      type: String,
      unique: true,
    },
    receiptOfPayment: {
      type: String,
      required: [true, 'Kindly provide the receipt of payment'],
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
    emailAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
