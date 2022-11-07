const Intention = require('../models/intentions');
const AppError = require('../utils/appError');

exports.createIntention = async (req, res, next) => {
  try {
    const newIntention = await Intention.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'Intentions created successfully',
      data: newIntention,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getAllIntentions = async (req, res, next) => {
  try {
    const getAllIntentions = await Intention.find().sort({ createdAt: -1 });
    return res.status(200).json({
      status: 'success',
      message: 'Intentions fetched successfully',
      data: getAllIntentions,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getOneIntention = async (req, res, next) => {
  try {
    const getOneIntention = await Intention.findOne({
      id: req.params.id,
    }).populate('parishes');
    return res.status(200).json({
      status: 'success',
      message: 'Intentions fetched successfully',
      data: getOneIntention,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getParishIntention = async (req, res, next) => {
  try {
    const getOneIntention = await Intention.findAll({
      parishId: req.params.id,
    });
    return res.status(200).json({
      status: 'success',
      message: 'Intentions fetched successfully',
      data: getOneIntention,
    });
  } catch (error) {
    return next(error);
  }
};
