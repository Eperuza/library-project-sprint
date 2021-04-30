import { render, screen } from '@testing-library/react';
import App from '../App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
const books = require('../books.json');
import { BrowserRouter as Router } from 'react-router-dom';


beforeEach(()=>{
  render(<Router><App /></Router>);
})


test('renders SDI Library heading', () => {
  const heading = screen.getByRole('heading');
  expect(heading.innerHTML).toBe('SDI Library');
});


test('renders a list of books', () => {
  const bookList = screen.getByRole('list');
  expect(bookList).toBeInTheDocument();
  expect(bookList).toHaveClass('bookList');
  
})

const server = setupServer(
  rest.get('http://localhost:3001/api/books', (req, res, ctx) => {
    return res(ctx.json(books))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('returns all of the books in the library' , async () =>{
  const bookList = await screen.findAllByRole('listitem');
  expect(bookList.length).toBe(5);
  expect(bookList[2].innerHTML).toBe("The Adventures of Zach and Jeff")
})

test('has a text input for a user ID', () => {
  const userIdInput = screen.getByRole('textbox');
  expect(userIdInput).toBeInTheDocument();
})