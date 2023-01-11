const express = require('express');
const { upload, resizeImage, testResponse } = require('../../utils/upload');
const router = express.Router();
const donationcontroller = require('../../controllers/donationController');
router.post(
  '/donate',
  upload.single('paymentReceipt'),
  resizeImage,
  donationcontroller.makeADonation
);
router
  .route('/uploadImage')
  .post(upload.single('image'), resizeImage, testResponse);
router.route('/allDonations').get(donationcontroller.getDonatopns);
router.route('/:id').get(donationcontroller.getOnedonation);
router.route('/:?donationType').get(donationcontroller.getDonationsByCategory);

module.exports = router;
