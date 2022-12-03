const routes = require('express').Router();

const { productRouter } = require('../routes/productRouter');

routes.use('/products', productRouter);

module.exports = { routes };
