const User = require('../models/user');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { response } = require('express');

const userToken = async (id, email) => {
  return jwt.sign({ id, email: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
    issuer: process.env.JWT_ISSUER,
  });
};
const createSendToken = (user, statusCode, req, res) => {
  const token = userToken(user._id, user.email);

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signUp = async (req, res, next) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      return new AppError('Email already in use', 401);
    }
    const newUser = await User.create(req.body);
    createSendToken(newUser, 201, req, res);
  } catch (error) {
    return next(error);
  }
};
exports.signIn = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      return new AppError('Email and password are required', 400);
    }

    const user = await User.findOne({ email: req.body.email }).select(
      '+password'
    );
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!user || !isCorrectPassword) {
      return new AppError(
        'Incorrect password or email, Kindly confirm your details or create an account if you do not have an account yet',
        401
      );
    }
    createSendToken(user, 200, req, res);
  } catch (error) {
    return next(error);
  }
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError(
        'You are not logged in, Kindly log in to be able to perfrom this action',
        401
      )
    );
  }
  const decodedUser = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  const currentUser = await User.findById({ id: decodedUser.id });
  if (!currentUser) {
    return next(
      new AppError('User belonging to this token does not exist', 401)
    );
  }
  req.user = currentUser;
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(new AppError('Unathorized', 403));
    }
    next();
  };
};
