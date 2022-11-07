const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const logger = require('./helper/logger');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

process.on('unhandledRejection', (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);

  throw new Error(reason.message || reason);
});
const db = process.env.DB_URI;
mongoose.connect(db).then(() => {
  'Database connection established';
});

process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
});

process.on('uncaughtException', () => {
  logger.log();
});
