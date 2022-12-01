const routes = require('express').Router();
const productRouter = require("./product.router");

routes.use("/products", productRouter.routes);

module.exports = { routes };
