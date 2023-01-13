const express = require('express');
const router = express.Router();
const feedBackController = require('../../controllers/feedbackController');
const userController = require('../../controllers/userController');

router.route('/newFeedBack').post(feedBackController.createFeedBack);
router
  .route('/allFeedBacks')
  .get(userController.protect, feedBackController.getFeedback);
router
  .route('/:id')
  .get(userController.protect, feedBackController.getOneFeedBack);
router
  .route('/feedbackType')
  .get(userController.protect, feedBackController.getTypeOfFeedback);

module.exports = router;
