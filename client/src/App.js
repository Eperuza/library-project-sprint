import './App.css';
import {useState, useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import BookEntry from './components/BookEntry';
import Book from './components/Book'
import { Cookies, useCookies } from 'react-cookie';



// const books = require('./books.json')
function App() {
const [books, setBooks] = useState([]);
const [selectedBook, setSelectedBook] = useState({});
let history = useHistory();
const [cookies, setCookie, removeCookie] = useCookies(['user'])
const [userIdInput, setUserIdInput] =useState('');

  useEffect(()=>{
    fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    return () => setBooks([]);
  }, [])

  const viewBookDetails = (event, book) => {
    console.log(book.id);
    setSelectedBook(book)
    history.push(`/bookdetails/${book.id}`)
  }

  const handleChange = (event) => {
    setUserIdInput(event.target.value);
  }

  return (
    
      <div className="App">
        <Route exact path ='/'>
          <h1>SDI Library</h1>
          {cookies.user ? <button onClick={() => removeCookie('user')} className="userLogout">Logout</button> : <div>
          <label>User ID: <input type="text" onChange = {(e) => handleChange(e)}/></label>
          <button className="userLogin" onClick={() => setCookie('user',userIdInput)}>Submit</button></div>
          }
          <ul className='bookList'>
            {books.map(book => {
              return(
                <Book  key={book.id}  book={book} viewBookDetails={viewBookDetails}/>
              )
            })
            }
          </ul>
      </Route>
      
        <Route path ='/bookdetails/:id'
          component={({match}) => {
           return <BookEntry match={match} book={selectedBook}/>
          }}>
        </Route> 

      </div>
    
  );
}

export default App;
