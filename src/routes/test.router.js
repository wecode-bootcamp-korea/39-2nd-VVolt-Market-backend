const routes = require("express").Router();
const { upload } = require('../config/s3');

routes.post("/upload", upload.single('image'), (req, res) => {
    console.log(req, res);
});

module.exports = { routes };