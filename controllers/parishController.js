const Parish = require('../models/parishes');
const AppError = require('../utils/appError');

exports.createParish = async (req, res, next) => {
  try {
    const newParish = await Parish.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'New Parish was created successfully',
      data: newParish,
    });
  } catch (error) {
    return next(error);
  }
};
exports.updateParish = async (req, res, next) => {
  try {
    const parish = await Parish.findOne({ id: req.params.id });
    await parish.update(req.body);
    return res.status(200).json({
      status: 'success',
      message: 'Parish updated successfully',
      data: parish,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getParishes = async (req, res, next) => {
  try {
    const allParishes = await Parish.find().sort('-createdAt -1');
    return res.status(200).json({
      status: 'success',
      message: ' Parishes fetched successfully',
      data: allParishes,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getOneParish = async (req, res, next) => {
  try {
    const parish = await Parish.findOne({ _id: req.params.id });
    return res.status(200).json({
      status: 'success',
      message: 'Parish fetched successfully',
      data: parish,
    });
  } catch (error) {
    return next(error);
  }
};
