const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', controllers.ping);

app.use(routes);

app.use(middlewares.error);

module.exports = app;
