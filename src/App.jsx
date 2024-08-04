// src/App.jsx
import './App.css';

const App = () => {
  const books = [
    { name: 'wheel of time', read: true },
    { name: 'song of fire', read: false },
    { name: 'harry potter', read: true },
  ];

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className={book.read ? 'completed' : 'not-completed'}>
            {book.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;