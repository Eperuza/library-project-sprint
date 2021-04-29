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

app.get('/api/books/:bookId/checkout/:userId', async (req, res) => {
  const today = new Date();
  const checkoutDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  var due = today;
  const dueDate = `${due.getFullYear()}-${due.getMonth()}-${due.getDate()}`;

  await knex('books')
  .where({id: req.params.bookId})
  .update({user_id: req.params.userId, checked_out: true, checkout_date: checkoutDate, due_date: dueDate })

  res.status(200)
  res.send('Book checked out successfully!')
})

module.exports = app;