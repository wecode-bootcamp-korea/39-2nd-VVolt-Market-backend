const userService = require("../services/user.service");
const { catchAsync } = require("../utils/Error");

const userUpdate = catchAsync(async (req, res) => {
    const userId = req.userId;
    const { nickname, description, address, latitude, longitude /*, user_image*/ } = req.body;
    const user_image = req.file.location;
    console.log(req.file)
    if (!userId || !nickname && !user_image && `${description}`=== "undefined" && !address && !latitude && !longitude) {
      const err = new Error("KEY_ERROR");
      err.statusCode = 400;
      throw err;
    }
    
    await userService.userUpdate(userId, nickname, user_image, description, address, latitude, longitude);
  
    return res.status(200).json({
      message: "USER_MODIFY_SUCCESS",
    });
  });
  
  module.exports = { userUpdate };