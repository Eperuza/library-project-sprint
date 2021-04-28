const express = require('express');
const app = express();
const books = require('./books.json');


app.get('/api/books', (req, res) => {
  res.status(200)
  res.json(books)
})

module.exports = app;