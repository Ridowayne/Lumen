const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const { config, uploader } = require('cloudinary').v2;
const ErrorResponse = require('./appError');

config({
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
  req.file.filename = `receipt-${req.file.originalname}-${
    req.body.uniqueCode
  }-${Date.now()}.jpeg`;
  console.log(req.file);

  await sharp(req.file.buffer)
    .resize(300, 300)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`receipts/${req.file.filename}`)
    .then(async (data) => {
      console.log(data);
      // res.send(data);
      await uploader
        .upload(
          `receipts/${req.file.filename}`,
          {
            public_id: req.file.fileName,
            tags: 'image_upload',
          },
          (err, image) => {
            if (err) {
              return res.status(400).send(err);
            }
            // req.body.receiptOfPayment = image
            fs.unlink(`./receipts/${req.file.filename}`, (err) => {
              if (err) {
                console.error(err);
                return;
              }

              console.log('file deleted successfully');
            });

            req.image = image;
            req.body.receiptOfPayment = image.url;
            return { image };
          }
        )
        .catch((err) => {
          res.status(400).send(err);
        });
    });
  next();
};
const testResponse = async (req, res) => {
  console.log(req.image);
  res.status(200).send('Uploaded successfully');
};
module.exports = { upload, resizeImage, testResponse };
