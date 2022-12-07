const reviewDao = require("../models/reviewDao");

const createReviewByusername = async (productId,  userId, contents, rating) => {
    return await reviewDao.createReviewByusername(productId, userId, contents, rating)

}

const getReviewByusername = async (userId) => {
    return await reviewDao.getReviewByusername(userId)
    };

module.exports = {
    getReviewByusername,
    createReviewByusername
}