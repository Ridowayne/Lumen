const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use('/api', routes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `can not get ${req.originalUrl} on the server`,
  });
  next(new ErrorResponse(`can not get ${req.originalUrl} on the server`, 404));
});

module.exports = app;
