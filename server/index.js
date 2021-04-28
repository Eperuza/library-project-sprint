const express = require('express');
const app = express();
const books = require('./books.json');
const cors = require('cors')

app.use(cors());

app.get('/api/books', (req, res) => {
  res.status(200)
  res.json(books)
})

module.exports = app;