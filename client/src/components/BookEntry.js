function BookEntry ({book}) {
    return(
        <div>
          <h2 className="bookTitle">{book.title}</h2>
          <div className="author">
            <h3>Author</h3>
            {book.author}
          </div>
          <div className="isbn">
            <h3>ISBN</h3>
            {book.isbn}
          </div>
        </div>
    )
}

export default BookEntry;

