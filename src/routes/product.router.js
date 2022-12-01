const routes = require("express").Router();
const productController = require("../controllers/product.controller");
//const { imageUploader } = require('../utils/imageUploader');
const { checkAuth } = require("../utils/checkAuth")

routes.patch("/:productId", checkAuth, productController.productUpdate);
// imageUploader.array('images', 5)
module.exports = { routes };