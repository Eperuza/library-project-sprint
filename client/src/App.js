import logo from './logo.svg';
import './App.css';
const books = require('./books.json')
function App() {
  return (
    <div className="App">
      <h1>SDI Library</h1>
      <ul className='bookList'>
        {books.map(book => {
          return (<li key={book.id}>{book.title}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
