const { appDataSource } = require('./dataSource');

const getUserById = async (socialId) => {
  const result = await appDataSource.query(
    `
    SELECT
        id
    FROM users
    WHERE id = ?
    `,
    [socialId]
  );
  return result;
};

module.exports = { getUserById };
