const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const delay = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};

app.get('/', (req, res) => {
  delay(5000);
  res.json({ status: 'success', pid: process.pid });
});

app.get('/test', (req, res) => {
  res.json({ status: 'success', pid: process.pid });
});

module.exports = app;
