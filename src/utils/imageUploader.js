require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

AWS.config.update({
  region: process.env.AWS_S3_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3()

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp']

const imageUploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, callback) => {
      const uploadDirectory = req.query.directory ?? ''
      const extension = path.extname(file.originalname)
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error('wrong extension'))
      }
      callback(null, `${uploadDirectory}/${Date.now()}_${file.originalname}`)
    },
    acl: 'public-read-write'
  }),
})

const test = () => {

  // const testImg = fs.readFileSync(__dirname + '/test.png'); 
  // console.log(testImg)
  console.log(process.env.BUCKET_NAME)
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');

  console.log()
  console.log(process.env.AWS_ACCESS_KEY_ID)
  console.log(process.env.AWS_SECRET_ACCESS_KEY)
  AWS.config.update({
    region: process.env.AWS_S3_REGION || 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'AKIAQR3AQERJ4FODIWNR',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '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',
  });
  // Set the region 
  // AWS.config.update({region: 'ap-northeast-2'});

  // Create S3 service object
  var s3 = new AWS.S3({apiVersion: '2006-03-01'});

  // call S3 to retrieve upload file to specified bucket
  var uploadParams = {Bucket: process.env.BUCKET_NAME, Key: 'test', Body: 'test'};
  var file = __dirname + '/test-image.png';
  // console.log(file)

  // Configure the file stream and obtain the upload parameters
  var fs = require('fs');
  var fileStream = fs.createReadStream(file);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  uploadParams.Body = fileStream;
  var path = require('path');
  uploadParams.Key = path.basename(file);

  // call S3 to retrieve upload file to specified bucket
  s3.upload (uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  });

}

module.exports = { imageUploader, test }
