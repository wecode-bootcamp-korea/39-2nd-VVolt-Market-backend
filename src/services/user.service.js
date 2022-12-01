const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");

const userUpdate = async (userId, nickname, user_image, description, address, latitude, longitude) => {
    const user = await userDao.getUserByNickname(nickname);
    if (user) {
      const err = new Error(`duplicated nickname`);
      err.statusCode = 400;
      throw err;
    }
    
    const setParams = { nickname, user_image, description, address, latitude, longitude };

    const makeProductQueryBuilders = (params) => { 
        let setConditons = Object.entries(params).map( 
            function ([key, value]){
                if(key === "latitude" || key === "longitude" ){ 
                    return `${key} = ${value}`;
                };                                                                                      
                return `${key} = '${value}'`;
            }
        );
        setConditons = setConditons.filter(el => el.indexOf("undefined")===-1)
        return `SET ${setConditons.join(', ')}`;
    }; 

    const setClause = makeProductQueryBuilders(setParams);
    
    await userDao.userUpdate(userId, setClause);
};

module.exports = { userUpdate };