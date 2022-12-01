const productService = require("../services/product.service");
const { catchAsync } = require("../utils/Error");

const productUpdate = catchAsync(async (req, res) => {
    const { productId } = req.params;
    const { name, description, price, location, latitude, longitude, product_status_id, category_id, image_url } = req.body;
    const userId = req.userId;

    if (!productId || !name || !description || !price || !location || !latitude || !longitude || !product_status_id || !category_id || !image_url || !userId) {
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

    await productService.productUpdate( productId, name, description, price, location, latitude, longitude, product_status_id, category_id, image_url);

    return res.status(200).json({
      message: "UPDATE_SUCCESS",
    });
});

module.exports = { productUpdate }