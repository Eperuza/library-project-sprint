import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router';
import BookEntry from '../components/BookEntry';


const book = {"title": "Derek's Biography", "id": "1", "isbn": "1234567890", "author": "Derek", "checked_out": false}


beforeEach(() => render(<BookEntry match={{params: {id: '1'}}} book={book}/>));

describe('Displays details about an individual book', () => {
  xit('displays the title of the book with book ID specified', () => {
    const title = screen.getAllByRole('heading')[0]
    expect(title).toHaveClass('bookTitle');
    expect(title.innerHTML).toContain(book.title);
  })
  xit('displays the author of the book with book ID specified', () => {
    expect(screen.getByText(/author/i)).toBeTruthy();
    expect(screen.getByText(`${book.author}`)).toBeTruthy();
  })
  xit('displays the ISBN of the book with book ID specified', () => {
    expect(screen.getByText(/isbn/i)).toBeTruthy();
    expect(screen.getByText(`${book.isbn}`)).toBeTruthy();
  })
  xit('displays the status of the book', () => {
      expect(screen.getByText(/status/i)).toBeTruthy();
      expect(screen.getByText(/available/i)).toBeTruthy();
  })
  it('displays a checkout button', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  })
})