const express = require('express');
const ErrorResponse = require('./utils/appError');
const routes = require('./routes/index');
const app = express();

app.use('/api', routes);
app.get('/', (req, res) => {
  res.send(
    'Welcome to lumen backend apis where all the beans have been cokked'
  );
});

// app.all('*', (req, res, next) => {
//   res.status(404).json({
//     status: 'fail',
//     message: `can not get ${req.originalUrl} on the server`,
//   });
//   next(
//     new ErrorResponse(
//       `can not get ${req.originalUrl} on the server to make a ${req.method} request`,
//       404
//     )
//   );
// });

module.exports = app;
