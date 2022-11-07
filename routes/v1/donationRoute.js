const express = require('express');
const router = express.Router();
const donationcontroller = require('../../controllers/donationController');
router.route('/createDonation').post(donationcontroller.createDonation);
router.route('/allDonations').get(donationcontroller.getDonatopns);
router.route('/:id').get(donationcontroller.getOnedonation);
router.route('/donationType').get(donationcontroller.getDonationsByCategory);

module.exports = router;
