const multer = require('multer');
const sharp = require('sharp');
const cloudinary = require('cloudinary').v2;
const ErrorResponse = require('./appError');

cloudinary.config({
  cloud_name: 'dsuwyk6ml',
  api_key: '975589453365429',
  api_secret: 'nFRxoqatCbMsy0RCpYfrLfzB1wI',
});

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new ErrorResponse('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
const resizeImage = async (req, res, next) => {
  if (!req.file) return next();
  req.file.fileName = `receipt-${req.body.uniqueCode}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(400, 400)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer()
    .then((data) => {
      console.log(data);
      cloudinary.uploader
        .upload(
          data,
          {
            public_id: req.file.fileName,
            tags: 'image_upload',
          },
          (err, image) => {
            if (err) {
              return res.status(400).send(err);
            }
            // req.body.receiptOfPayment = image
            return image;
          }
        )
        .catch((err) => {
          res.status(400).send(err);
        });
    });
};
module.exports = { upload, resizeImage };
