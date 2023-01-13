const express = require('express');
const { upload, resizeImage, testResponse } = require('../../utils/upload');
const router = express.Router();
const donationcontroller = require('../../controllers/donationController');
const userController = require('../../controllers/userController');

router.post(
  '/donate',
  upload.single('paymentReceipt'),
  resizeImage,
  donationcontroller.makeADonation
);
router
  .route('/uploadImage')
  .post(upload.single('image'), resizeImage, testResponse);
router
  .route('/allDonations')
  .get(userController.protect, donationcontroller.getDonatopns);
router
  .route('/:id')
  .get(userController.protect, donationcontroller.getOnedonation);
router
  .route('/:?donationType')
  .get(userController.protect, donationcontroller.getDonationsByCategory);

module.exports = router;
