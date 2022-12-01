const { appDataSource } = require("./dataSource");

const createProduct = async (name, description, price, location, latitude, longitude, product_status_id, category_id, user_id, image_url) => {
    const product = await appDataSource.query(
        `    
        INSERT INTO products (
          name,
          description,
          price,
          location,
          latitude,
          longitude,
          product_status_id,
          category_id,
          user_id
        ) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?
        );
        `,
        [name, description, price, location, latitude, longitude, product_status_id, category_id, user_id]
    );
    
    const imageBulk = image_url.map((image_url) => {
      return `(${product.insertId}, "${image_url}")`;
    })
    const values = imageBulk.join(", "); 
    
    const productImages = await appDataSource.query(
        `INSERT INTO product_images (
            product_id, 
            image_url
        ) VALUES ${values}`
    );
}

    module.exports = { createProduct };
    