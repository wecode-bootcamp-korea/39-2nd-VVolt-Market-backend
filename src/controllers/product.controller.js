const productService = require("../services/prodcuct.service");
const { catchAsync } = require("../utils/Error");

const createProduct = catchAsync(async (req, res) => {
    const { name, description, price, location, latitude, longitude, product_status_id, category_id, image_url} = req.body;
    const user_id = req.userId;
    
    if (!name || !description || !price || !location || !latitude || !longitude || !product_status_id || !category_id || !user_id || !image_url) {
        const err = new Error("KEY_ERROR");
        err.statusCode = 400;
        throw err;
    }
    // const files = req.files;
    // console.log(files)

    // const image_url = [];
    // for (let i = 0; i < files.length; i++) {
    //     image_url.push(files[i].location)
    // }
    // console.log(image_url)
    await productService.createProduct(name, description, price, location, latitude, longitude, product_status_id, category_id, user_id, image_url);
  
    return res.status(201).json({
        message: "POST_SUCCESS",
    });
});

module.exports = { createProduct };