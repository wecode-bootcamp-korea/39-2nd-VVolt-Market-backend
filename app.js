const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { routes } = require('./src/routes');

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));

  app.use(routes);

  return app;
};

module.exports = { createApp };
