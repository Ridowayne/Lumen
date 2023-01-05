const multer = require('multer');
const ErrorResponse = require('./appError');

const storage = multer.memoryStorage();
const multerFilter = (req, file) => {
  if (!file || !req.body) {
    throw new ErrorResponse('file not found', 404);
  }
  if (file?.fieldname === 'receipt') {
  }
};
