const routes = require('express').Router();
const userRouter = require("./user.router");

routes.use("/users", userRouter.routes);


module.exports = { routes };
