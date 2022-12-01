const routes = require("express").Router();
const userController = require("../controllers/user.controller");
const { checkAuth } = require("../utils/checkAuth")
const { imageUploader } = require('../utils/imageUploader');

routes.patch("", imageUploader.single('image'), checkAuth, userController.userUpdate);



module.exports = { routes };