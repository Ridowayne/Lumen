const Feedback = require('../models/feedback');
const AppError = require('../utils/appError');

exports.createFeedBack = async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Feedback created successfully.',
      data: feedback,
    });
  } catch (error) {
    throw error;
  }
};
exports.getFeedback = async (req, res, next) => {
  try {
    const allFeedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json({
      status: 'success',
      message: 'Feedback fetched successfully.',
      data: allFeedbacks,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getOneFeedBack = async (req, res, next) => {
  try {
    const feedback = await Feedback.findOne({
      _id: req.params.id,
    });
    return res.status(200).json({
      status: 'success',
      message: 'Feedback fetched successfully.',
      data: feedback,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getTypeOfFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findAll(req.params.query);
    return res.status(200).json({
      status: 'success',
      message: 'Feedback fetched successfully.',
      data: feedback,
    });
  } catch (error) {
    return next(error);
  }
};
