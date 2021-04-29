export default function Book ({book, viewBookDetails}) {
    return(
        <li className="book" onClick ={(event) => viewBookDetails(event,book)}>{book.title}</li>
    )
};