const { appDataSource } = require("./dataSource");

const getUserDetail = async (userId) => {
    const userInfo = await appDataSource.query(
        `
        SELECT
            u.id as sellerId,
            u.nickname as sellerName,
            u.user_image as sellerImg,
            u.description as sellerIntro,
            u.created_at as sellerOpenDay,
            u.address,
            u.latitude,
            u.longitude,
            u.name,
            (SELECT JSON_ARRAYAGG(p.id)
            FROM users u
            INNER JOIN products p ON p.user_id = u.id
            WHERE u.id = ?) as productId,
            (SELECT AVG(r.rating)       
            FROM products p 
            INNER JOIN reviews r ON p.id = r.product_id
            WHERE p.user_id = ?) as starAVG,
            (SELECT COUNT(r.id)            
            FROM products p 
            INNER JOIN reviews r ON p.id = r.product_id
            WHERE p.user_id = ?) as reviewNum,
            (SELECT COUNT(*)            
            FROM users u 
            INNER JOIN products p ON u.id = p.user_id
            WHERE u.id = ?) as onSaleNum,
            (SELECT COUNT(*)            
            FROM users u 
            INNER JOIN products p ON u.id = p.user_id
            INNER JOIN orders o ON o.product_id = p.id
            WHERE u.id = ? AND o.order_status_id = 1) as soldOutNum,
            (SELECT COUNT(*)            
            FROM users u 
            INNER JOIN likes l ON l.user_id = u.id
            WHERE u.id = ?) as likeNum,
            (SELECT COUNT(*)            
            from follow 
            WHERE follower = ?) as followingNum,
            (SELECT COUNT(*)            
            from follow 
            WHERE followee = ?) as followNum,
            (SELECT COUNT(*)            
            from orders o 
            WHERE o.user_id = ?) as orderNum         
        FROM users u
        WHERE u.id = ?;
        `
        ,[ userId, userId, userId, userId, userId, userId, userId, userId, userId, userId]
        );
        return userInfo;
};

module.exports = { getUserDetail };