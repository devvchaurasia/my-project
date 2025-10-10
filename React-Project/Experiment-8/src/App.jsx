import { useState } from 'react'
import './App.css'

const initialBooks = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]

function App() {
  const [books, setBooks] = useState(initialBooks)
  const [search, setSearch] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  function addBook() {
    if (!newTitle.trim() || !newAuthor.trim()) return
    const next = {
      id: Date.now(), // simple unique id
      title: newTitle.trim(),
      author: newAuthor.trim()
    }
    setBooks(prev => [...prev, next])
    setNewTitle('')
    setNewAuthor('')
  }

  function removeBook(id) {
    setBooks(prev => prev.filter(b => b.id !== id))
  }

  const lowered = search.toLowerCase()
  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(lowered) || b.author.toLowerCase().includes(lowered)
  )

  return (
    <div className="library-wrapper">
      <h1 className="library-title">Library Management</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        className="search-input"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="add-form">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <input
          type="text"
            placeholder="New book author"
          value={newAuthor}
          onChange={e => setNewAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <ul className="book-list">
        {filtered.map(book => (
          <li key={book.id} className="book-item">
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button onClick={() => removeBook(book.id)} className="remove-btn">Remove</button>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="empty">No books match your search.</li>
        )}
      </ul>
    </div>
  )
}

export default App
