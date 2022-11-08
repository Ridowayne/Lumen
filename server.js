const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const logger = require('./helper/logger');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`app listening on ${port}`);
});

process.on('unhandledRejection', (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);

  throw new Error(reason.message || reason);
});
const db = process.env.DB_URI;
mongoose.connect(db).then(() => {
  logger.info('Database connection established');
});

process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
});

process.on('uncaughtException', () => {
  logger.error();
});
