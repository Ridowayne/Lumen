const express = require('express');
const router = express.Router();
const feedBackController = require('../../controllers/feedbackController');
router.route('/newFeedBack').get(feedBackController.createFeedBack);
router.route('/allFeedBacks').get(feedBackController.getFeedback);
router.route('/:id').get(feedBackController.getOneFeedBack);
router.route('/feedbackType').get(feedBackController.getTypeOfFeedback);

module.exports = router;
