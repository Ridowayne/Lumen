const Testimony = require('../models/testimonies');
const AppError = require('../utils/appError');

exports.createTestimony = async (req, res, next) => {
  try {
    const newTestimony = await Testimony.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'New Testimony created successfully',
      data: newTestimony,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getTestimony = async (req, res, next) => {
  try {
    const testimony = await Testimony.find().sort({ createdAt: -1 });
    return res.status(200).json({
      status: 'success',
      message: 'Testimonies fetched successfully',
      data: testimony,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getOneTestimony = async (req, res, next) => {
  try {
    const testimony = await Testimony.findOne({ _id: req.params.id });
    testimony.isRead = true;
    await testimony.save();
    return res.status(200).json({
      status: 'success',
      message: 'Testimony fectched successfully',
      data: testimony,
    });
  } catch (error) {
    return next(error);
  }
};
