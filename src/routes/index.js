const routes = require('express').Router();

const { orderRouter } = require('./orderRouter');

routes.use('/orders', orderRouter);

module.exports = { routes };
