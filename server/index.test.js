const request = require('supertest');
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
  done();
})


