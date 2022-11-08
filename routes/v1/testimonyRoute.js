const express = require('express');
const router = express.Router();
const testimonyController = require('../../controllers/testimonyController');
router.route('/createTestimony').post(testimonyController.createTestimony);
router.route('/getTestimony').get(testimonyController.getTestimony);
router.route('/:id').get(testimonyController.getOneTestimony);

module.exports = router;
