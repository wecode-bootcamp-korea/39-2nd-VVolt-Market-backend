const userService = require("../services/user.service");
const { catchAsync } = require("../utils/Error");

const getUserDetail = catchAsync(async (req, res) => {
    const { userId } = req.params;
    const userIdByToken = req.userId;
    const flag = (userId, userIdByToken) => {
        return userId == userIdByToken ? true : false;
    };
    
    const [ shopInfo ] = await userService.getUserDetail(userId);
    const [ myInfo ] = await userService.getUserDetail(userIdByToken);
    
    return res.status(200).json(
        {
            "isMyShop" : flag(userId, userIdByToken),
            "myData" : {
                "writerId" : myInfo.sellerId, 
                "writerName" : myInfo.sellerName,
                "writerImg" : myInfo.sellerImg,
                "address" : myInfo.address,
                "latitude" : myInfo.latitude,
                "longitude" : myInfo.longitude,
                "realName" : myInfo.name
            },
            "shopData" : shopInfo
        }
    );
});

module.exports = { getUserDetail };
