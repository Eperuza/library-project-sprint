const request = require('supertest');
const app = require('./index.js');

it('receives a successful response from the /api/books endpoint', async ()=> {
  const response = await request(app)
  .get('/api/books')
  .expect(200)
  .expect('Content-Type', /json/)
  .catch(err => console.log(err));

  expect(response.body.length).toBe(5);
  expect(response.body[2]).toHaveProperty('ISBN');
  expect(response.body[2]).toHaveProperty('author');
  expect(response.body[2]).toHaveProperty('checkedOut');
});


