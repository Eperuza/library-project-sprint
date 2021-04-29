import { render, screen } from '@testing-library/react';
import BookEntry from '../components/BookEntry';

const book = {"title": "Derek's Biography", "id": "1", "isbn": "1234567890", "author": "Derek", "checked_out": false}


beforeEach(() => render(<BookEntry book={book}/>));

describe('Displays details about an individual book', () => {
  it('displays the title of the book with book ID specified', () => {
    const title = screen.getAllByRole('heading')[0]
    expect(title).toHaveClass('bookTitle');
    expect(title.innerHTML).toContain(book.title);
  })
  it('displays the author of the book with book ID specified', () => {
    expect(screen.getByText(/author/i)).toBeTruthy();
    expect(screen.getByText(`${book.author}`)).toBeTruthy();
  })
  it('displays the ISBN of the book with book ID specified', () => {
    expect(screen.getByText(/isbn/i)).toBeTruthy();
    expect(screen.getByText(`${book.isbn}`)).toBeTruthy();
  })
})