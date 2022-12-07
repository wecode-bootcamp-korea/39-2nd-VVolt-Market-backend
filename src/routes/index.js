const routes = require('express').Router();

const {userRouter}  = require('./userRouter');
const {reviewRouter} = require("./reviewRouter")

routes.use('/users', userRouter);
routes.use('/review', reviewRouter);

module.exports = { routes };
