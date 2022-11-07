const Donation = require('../models/donation');
const AppError = require('../utils/appError');

exports.createDonation = async (req, res, next) => {
  try {
    const newDonation = await Donation.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'New donation was successfully created.',
      data: newDonation,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getDonatopns = async (req, res, next) => {
  try {
    const allDonations = await Donation.findAll();
    return res.status(200).json({
      status: 'success',
      message: 'all donations fetched successfully',
      data: allDonations,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getDonationsByCategory = async (req, res, next) => {
  try {
    const query = req.query.category;
    const category = req.body.category;
    const allDonations = await Donation.findAll({ category: category });
    return res.status(200).json({
      status: 'success',
      message: 'Donations fetched successfully',
      data: allDonations,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getOnedonation = async (req, res, next) => {
  try {
    const oneDonation = await Donation.findOne({ id: req.params.id });
    return res.status(200).json({
      status: 'success',
      message: 'one donation fetched successfully',
      data: oneDonation,
    });
  } catch (error) {
    return next(error);
  }
};
