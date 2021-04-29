import './App.css';
import {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import BookEntry from './components/BookEntry';


// const books = require('./books.json')
function App() {
const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    return () => setBooks([]);
  }, [])

  return (
    
      <div className="App">
        <Route exact path ='/'>
          <h1>SDI Library</h1>
          <ul className='bookList'>
            {books.map(book => {
              return(
                <li key= {book.id}>{book.title}</li>
              )
            })
            }
          </ul>
      </Route>
      
     { books.length > 0 &&
        <Route path ={`/bookdetails/${books[0].id}`}>
        <BookEntry book={books[0]}/>
        </Route> 
     }
      </div>
    
  );
}

export default App;
