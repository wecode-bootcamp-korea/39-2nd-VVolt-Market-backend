const productDao = require("../models/product.dao");

const createProduct = async (name, description, price, location, latitude, longitude, product_status_id, category_id, user_id, image_url) => {
    return await productDao.createProduct(name, description, price, location, latitude, longitude, product_status_id, category_id, user_id, image_url);
};

module.exports = { createProduct }