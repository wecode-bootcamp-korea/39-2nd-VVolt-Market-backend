const  reviewService  = require('../services/reviewService')

const createReviewByusername = async(req,res)=>{
    try {
        const userId = req.userId
        console.log(userId)
        const { productId ,contents,rating}=req.body
        console.log()
        // if ( !productId || !userId || !contents || !rating ) {
        //     return res.status(404).json({ message: 'Key Error' });
     const result = await reviewService.createReviewByusername(productId, userId, contents, rating);
    return res.status(201).json({message: 'Success!!!!' });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({message: err.message})
    }
    };

const getReviewByusername = async (req, res) => {

    const {userId} =req.params
    const UserReview = await reviewService.getReviewByusername(userId);
    res.status(200).json({review_list: UserReview});
};

module.exports = {
    getReviewByusername,
    createReviewByusername
    }