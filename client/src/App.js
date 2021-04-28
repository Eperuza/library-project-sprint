import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


const books = require('./books.json')
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
      <h1>SDI Library</h1>
      <ul className='bookList'>
        {books.map(book => {
          return(
            <li key= {book.id}>{book.title}</li>
          )
        })
        }
      </ul>
    </div>
  );
}

export default App;
