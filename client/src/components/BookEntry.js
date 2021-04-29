import { useState, useEffect } from 'react';

function BookEntry ({book, match}) {
  const [ currentBook, setCurrentBook ] = useState({});
  const userId = 1;

  useEffect( () => {
    book.id ? setCurrentBook(book) : 
    fetch(`http://localhost:3001/api/books/${match.params.id}`)
    .then(response => response.json())
    .then(result => setCurrentBook(result[0]))
    return () => setCurrentBook({});
  }, [])

  function checkoutBook() {
    fetch(`http://localhost:3001/api/books/${currentBook.id}/checkout/${userId}`)
    .then(response => response.json())
    .then(result => console.log(result))
  }

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
          <div className="bookStatusContainer">
              <h3>Status</h3>
              {currentBook.checked_out ? 'Checked Out' : 
                <div className='bookStatus'>Available <button className='btn' onClick={() => checkoutBook()}>Checkout</button></div> 
              }
              
              <div className="dueDateBack">{currentBook.due_date ? `Due back on : ${currentBook.due_date.slice(0,10)}` : ''}</div>
              <div className="checkedOutBy">{currentBook.user_id ? `This person has it: ${currentBook.user_id}` : ''}</div>
          </div>
        </div>
    )
}

export default BookEntry;

