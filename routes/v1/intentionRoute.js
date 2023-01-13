const express = require('express');
const router = express.Router();
const { upload, resizeImage } = require('../../utils/upload');
const intentionController = require('../../controllers/intentionController');
const userController = require('../../controllers/userController');

router
  .route('/create')
  .post(upload.single('paymentReceipt'), intentionController.createIntention);
router
  .route('/allIntentions')
  .get(userController.protect, intentionController.getAllIntentions);
router
  .route('/:id')
  .get(userController.protect, intentionController.getOneIntention);
router
  .route('/:parishId')
  .get(userController.protect, intentionController.getParishIntention);

module.exports = router;
