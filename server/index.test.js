const request = require('supertest');
const { get } = require('./index.js');
const app = require('./index.js');

it('receives a successful response from the /api/books endpoint', async (done)=> {
  const response = await request(app)
  .get('/api/books')
  .expect(200)
  .expect('Content-Type', /json/)
  .catch(err => console.log(err));

  expect(response.body.length).toBe(5);
  expect(response.body[2]).toHaveProperty('isbn');
  expect(response.body[2]).toHaveProperty('author');
  expect(response.body[2]).toHaveProperty('checked_out');
  expect(response.body[2].title).toBe('The Adventures of Zach and Jeff');

  done();
});

it('returns a specific book by id from the api/books/:bookId', async (done) => {
  const response = await request(app)
  .get('/api/books/1')
  .expect(200)
  .expect('Content-Type', /json/)

  expect(response.body.length).toBe(1);
  expect(response.body[0]).toHaveProperty('isbn');
  expect(response.body[0]).toHaveProperty('author');
  expect(response.body[0]).toHaveProperty('checked_out');
  expect(response.body[0].title).toBe('Derek\'s Biography');
  expect(response.body[0]).toHaveProperty('due_date');
  expect(response.body[0]).toHaveProperty('checkout_date');
  expect(response.body[0]).toHaveProperty('user_id');
  done();
})

it('checks out a book', async (done) => {
  const bookToCheckout = await request(app)
  .get('/api/books/2')
 
  expect(bookToCheckout.body[0].checked_out).toBe(false);
  
  const checkingOutBook= await request(app)
  .get('/api/books/2/checkout/1')

  const bookCheckedOut = await request(app)
  .get('/api/books/2')

  expect(bookCheckedOut.body[0].checked_out).toBe(true);
  done()
})


