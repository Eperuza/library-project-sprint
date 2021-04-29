import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

beforeEach(() => render(<Router><App /></Router>))

describe('books in list on home page', () => {
  it('each book has a title', async () => {
    const books = await screen.findAllByRole('listitem')
    expect(books.length).toBe(5);
  })
})