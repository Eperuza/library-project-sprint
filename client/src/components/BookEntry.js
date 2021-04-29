import { useState, useEffect } from 'react';

function BookEntry ({book, match}) {
  const [ currentBook, setCurrentBook ] = useState({});

  useEffect( () => {
    book.id ? setCurrentBook(book) : 
    fetch(`http://localhost:3001/api/books/${match.params.id}`)
    .then(response => response.json())
    .then(result => setCurrentBook(result[0]))
  }, [])

    return(
        <div>
          <h2 className="bookTitle">{currentBook.title}</h2>
          <div className="author">
            <h3>Author</h3>
            {currentBook.author}
          </div>
          <div className="isbn">
            <h3>ISBN</h3>
            {currentBook.isbn}
          </div>
          <div className="bookStatus">
              <h3>Status</h3>
              {currentBook.checked_out ? 'Checked Out' : 'Available'}
          </div>
        </div>
    )
}

export default BookEntry;

