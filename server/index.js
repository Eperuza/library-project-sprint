const express = require('express');
const app = express();
// const books = require('./books.json');
const cors = require('cors');
var environment = 'development';
const knex = require('knex')(require('./knexfile.js')[environment]);

app.use(cors());

app.get('/api/books', async (req, res) => {
  const books = await knex.select('*').from('books');
  res.status(200);
  res.json(books);
})

app.get('/api/books/:bookId', async (req, res) => {

  const book = await knex.select('*')
  .from('books')
  .where({id: parseInt(req.params.bookId)})
 
  res.status(200)
  res.json(book)
})

module.exports = app;