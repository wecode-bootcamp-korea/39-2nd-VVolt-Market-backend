const routes = require('express').Router();

const { userRouter } = require('./userRouter');

routes.use('/users', userRouter);

module.exports = { routes };
