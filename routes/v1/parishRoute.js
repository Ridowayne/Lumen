const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const parishController = require('../../controllers/parishController');

router
  .route('/createParish')
  .post(userController.protect, parishController.createParish);
router.route('/allParish').get(parishController.getParishes);
router.route('/:id').get(parishController.getOneParish);
router
  .route('/updateParish')
  .patch(userController.protect, parishController.updateParish);

module.exports = router;
