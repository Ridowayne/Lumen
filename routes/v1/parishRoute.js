const express = require('express');
const router = express.Router();
const parishController = require('../../controllers/parishController');
router.route('/createParish').post(parishController.createParish);
router.route('/allParish').get(parishController.getParishes);
router.route('/:id').post(parishController.getOneParish);
router.route('/updateParish').patch(parishController.updateParish);

module.exports = router;
