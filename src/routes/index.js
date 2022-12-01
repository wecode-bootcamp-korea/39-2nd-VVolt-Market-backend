const routes = require('express').Router();
const userRouter = require("./user.router");
const testRouter = require("./test.router");

routes.use("/users", userRouter.routes);
routes.use("/test", testRouter.routes);


module.exports = { routes };