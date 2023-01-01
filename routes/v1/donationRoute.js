const express = require('express');
const router = express.Router();
const donationcontroller = require('../../controllers/donationController');
router.post('/donate', donationcontroller.makeADonation);
router.route('/allDonations').get(donationcontroller.getDonatopns);
router.route('/:id').get(donationcontroller.getOnedonation);
router.route('/:?donationType').get(donationcontroller.getDonationsByCategory);

module.exports = router;
