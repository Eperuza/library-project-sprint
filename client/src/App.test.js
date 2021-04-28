import { render, screen } from '@testing-library/react';
import App from './App';


beforeEach(()=>{
  render(<App />);
})


test('renders SDI Library heading', () => {
  const heading = screen.getByRole('heading');
  expect(heading.innerHTML).toBe('SDI Library');
});


test('renders a list of books', () => {
  const bookList = screen.getByRole('list');
  expect(bookList).toBeInTheDocument();
  expect(bookList).toHaveClass('bookList');
  expect(bookList.children.length).toBe(5);
})