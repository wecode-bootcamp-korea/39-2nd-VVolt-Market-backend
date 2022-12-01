const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const productDao = require("../models/product.dao");

const productUpdate = async ( productId, name, description, price, location, latitude, longitude, product_status_id, category_id, image_url ) => {

    const setParams ={ name, description, price, location, latitude, longitude, product_status_id, category_id };

    const makeProductQueryBuilders = (params) => { 
        let setClauses = Object.entries(params).map( 
            function ([key, value]){
                if(key === "name" || key === "description" || key === "location" ){ 
                    return `${key} = '${value}'`;
                };                                                                                      
                return `${key} = ${value}`;
            }
        );
        setClauses = setClauses.filter(el => el.indexOf("undefined")===-1)
        return `SET ${setClauses.join(', ')}`;
    }; 
    
    const imageBulk = image_url.map((value) => {
        return `(${productId}, '${value}')`;
    })

    const setClause = makeProductQueryBuilders(setParams);
    const imageBulks = imageBulk.join(', ');

    return await productDao.productUpdate(setClause, imageBulks, productId);
};

module.exports = { productUpdate };