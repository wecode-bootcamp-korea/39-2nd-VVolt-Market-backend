require('dotenv').config();

const { appDataSource } = require('./src/models/dataSource');
const { createApp } = require('./app');
const app = createApp();

const startServer = async () => {
  const PORT = process.env.PORT;

  await appDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
      appDataSource.destroy();
    });

  app.listen(PORT, () =>
    console.log(`server is listening on http://localhost:${PORT}`)
  );
};

startServer();
