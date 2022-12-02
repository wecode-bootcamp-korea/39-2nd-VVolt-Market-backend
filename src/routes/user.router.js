const routes = require("express").Router();
const userController = require("../controllers/user.controller");
const { checkAuth } = require("../utils/checkAuth")

routes.get("/:userId", checkAuth, userController.getUserDetail);

module.exports = { routes };