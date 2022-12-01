const { appDataSource } = require("./dataSource");

const getUserByNickname = async (nickname) => {
    const [user] = await appDataSource.query(
      `
        SELECT *
        FROM users u
        WHERE u.nickname = ?;
      `,
      [nickname]
    );
    return user;
  };

const userUpdate = async (userId, setClause) => {
    const userUpdating = await appDataSource.query(
      `
      UPDATE users
      ${setClause}
      WHERE users.id = ?;
      `,
      [userId]
    );
    return userUpdating;
};

module.exports = { getUserByNickname, userUpdate };