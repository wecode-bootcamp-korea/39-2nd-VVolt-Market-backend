const { appDataSource } = require('./dataSource');

const getUserById = async (userId) => {
  const result = await appDataSource.query(
    `
    SELECT
        id
    FROM users
    WHERE id = ?
    `,
    [userId]
  );
  return result;
};

module.exports = { getUserById };
