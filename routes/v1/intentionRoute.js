const express = require('express');
const router = express.Router();
const intentionController = require('../../controllers/intentionController');
router.route('/create').post(intentionController.createIntention);
router.route('/allIntentions').get(intentionController.getAllIntentions);
router.route('/:id').get(intentionController.getOneIntention);
router.route('/:parishId').get(intentionController.getParishIntention);

module.exports = router;
