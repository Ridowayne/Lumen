const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs.yaml');
// const swaggerDocument = require('./docs/swagger');
const ErrorResponse = require('./utils/appError');
const globalError = require('./controllers/errorController');
const routes = require('./routes/index');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send(
    'Welcome to lumen backend apis where all the beans have been cooked'
  );
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `can not get ${req.originalUrl} on the server`,
  });
});

app.use(globalError);
module.exports = app;
