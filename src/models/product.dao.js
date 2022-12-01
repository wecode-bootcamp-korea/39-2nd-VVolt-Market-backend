const { appDataSource } = require("./dataSource");

const productUpdate = async (setClause, imageBulks, productId) => {
    const product = await appDataSource.query(
        `
        UPDATE products
        ${setClause}
        WHERE id = ?;
        `,
        [productId]
    );
    
    const productImageDelete = await appDataSource.query(
        `
        DELETE FROM product_images
        WHERE product_id = ?
        `,
        [productId]
    );

    const productImageAdd = await appDataSource.query(
        `
        INSERT INTO product_images ( 
            product_id, 
            image_url 
        ) VALUES ${imageBulks}
        `
    );
    return productImageAdd;
};
  
module.exports = { productUpdate };
  