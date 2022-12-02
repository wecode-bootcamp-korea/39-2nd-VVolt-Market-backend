const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");

const getUserDetail = async (userId) => {
    return await userDao.getUserDetail(userId);
};

module.exports = { getUserDetail };