const express = require('express');
const router = express.Router();
const allRoutes = require('./v1/index');
router.route('/v1', allRoutes);

module.exports = router;
