const express = require('express');
const router = express.Router();
const donation = require('./donationRoute');
const feedback = require('./feedbackRoute');
const intention = require('./intentionRoute');
const parish = require('./parishRoute');
const testimony = require('./testimonyRoute');
const user = require('./userRoute');

router.route('/donation', donation);
router.route('/feedback', feedback);
router.route('/intention', intention);
router.route('/parish', parish);
router.route('/testimony', testimony);
router.route('/user', user);

module.exports = router;
