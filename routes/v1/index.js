const express = require('express');
const router = express.Router();
const donation = require('./donationRoute');
const intention = require('./intentionRoute');
const parish = require('./parishRoute');
const testimony = require('./testimonyRoute');
const userFeedback = require('./feedbackroute');
const user = require('./userRoute');

router.use('/donation', donation);
router.use('/feedback', userFeedback);
router.use('/intention', intention);
router.use('/parish', parish);
router.use('/testimony', testimony);
router.use('/user', user);

module.exports = router;
