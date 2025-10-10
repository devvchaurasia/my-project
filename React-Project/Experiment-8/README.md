# Library Management UI – Experiment 8

An interactive React interface to practice state, controlled inputs, list rendering, filtering, and simple item removal. Builds directly on the component basics from **Experiment 7** and carries forward dynamic list ideas from earlier vanilla JS experiments (filtering in Exp 5, updating UI based on user actions in Exp 4).

## Goal / Why This Experiment
You already rendered static product cards in Experiment 7. Here you move one step further: introduce mutable state (`useState`) and let the user change what appears on screen without any page reload. The UI lets you:
- Search for books by title or author (instant filtering)
- Add a new book (title + author)
- Remove a book from the list

This shows React re-rendering the list when the underlying state array changes—no manual DOM querying.

## Core React Concepts Practiced
- `useState` for multiple independent pieces of state (books list, search text, new form inputs)
- Controlled form inputs (value + onChange)
- Array operations: `filter`, `map`
- Simple conditional rendering (show a “No books” message when filtered list is empty)
- One‑way data flow (events update state → component re-renders)

## Data & State Overview
```js
const initialBooks = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];
```
State pieces:
1. `books` – current array of book objects
2. `search` – text for filtering
3. `newTitle`, `newAuthor` – controlled inputs for the add form

## How the UI Updates (Simple Flow)
1. User types in search box → `search` state updates → derived `filtered` array recalculates → list rerenders.
2. User fills title + author → clicks Add → new object pushed into `books` (with a generated `id`) → full list recalculates + renders.
3. User clicks Remove on a book → that book filtered out of `books` → list shrinks.
4. If after filtering no items remain → an "No books match" line appears.

No manual DOM calls like `getElementById` are needed—React handles DOM updates from the returned JSX.

## Key Functions (Plain Language)
- `addBook()` – Checks both inputs are non-empty, then appends a new book and clears the form.
- `removeBook(id)` – Filters the `books` array to exclude the book with that id.
- Filter expression – `b.title.toLowerCase().includes(lowered) || b.author.toLowerCase().includes(lowered)` matches search text against both fields.

## Minimal Code Snippet (Core Logic)
```jsx
const [books, setBooks] = useState(initialBooks);
const [search, setSearch] = useState('');
const [newTitle, setNewTitle] = useState('');
const [newAuthor, setNewAuthor] = useState('');

function addBook() {
  if (!newTitle.trim() || !newAuthor.trim()) return;
  setBooks(prev => [...prev, { id: Date.now(), title: newTitle.trim(), author: newAuthor.trim() }]);
  setNewTitle('');
  setNewAuthor('');
}

function removeBook(id) {
  setBooks(prev => prev.filter(b => b.id !== id));
}
```

## Comparison with Experiment 7
| Aspect | Experiment 7 | Experiment 8 (Current) |
|--------|--------------|------------------------|
| Data | Static array | Mutable list (add/remove) |
| Interactivity | None (read-only) | Search, add, delete |
| State Usage | Not used | Multiple `useState` hooks |
| Rendering | Hard-coded components | `map` over state array |
| Learning Focus | Basic components/props | State + dynamic list updates |

## Potential Next Steps (Future Ideas)
- Persist books in `localStorage` so refresh keeps changes
- Add a form validation message for empty fields
- Highlight matching search text
- Sort options (by title or author)
- Edit an existing book (inline form)

## File Structure
```
Experiment-8/
├── index.html
├── src/
│   ├── main.jsx        # Entry / mount
│   ├── App.jsx         # Library UI logic
│   ├── App.css         # Added basic layout styles
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

## How to Run
```bash
npm install
npm run dev
```

## Learning Objectives
- Practice multiple pieces of React state
- Understand controlled inputs and form submission logic
- Render lists from arrays using `map`
- Filter arrays for simple search behavior
- Remove items immutably using `filter`

---
