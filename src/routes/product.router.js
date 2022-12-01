const routes = require("express").Router();
const productController = require("../controllers/product.controller");
//const { imageUploader } = require('../utils/imageUploader');
const { checkAuth } = require("../utils/checkAuth")

routes.post("", checkAuth, productController.createProduct);
// imageUploader.array('images', 5)
module.exports = { routes };