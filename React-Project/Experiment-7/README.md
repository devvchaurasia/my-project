# Product Cards with React Components – Experiment 7

A first step into React: rendering a small set of product cards using functional components, props, JSX, and declarative UI composition. This experiment shifts from imperative DOM/event handling (Experiments 4–6) to a component-driven mindset.

## Why This Experiment
Previous experiments focused on: real‑time text updates (4), DOM filtering (5), and canvas drawing (6). Here the focus is: structure UI as reusable components, pass data via props, and rely on React's declarative render instead of manual DOM mutations.

## Core React Concepts Practiced
- Components: `App`, `ProductCard`
- Props: product object passed into each card
- JSX: HTML-like syntax compiled to function calls
- Declarative rendering: UI is a function of data
- Conditional rendering: image tag only if `product.image`
- Composition: Parent (`App`) arranges child cards in a flex row

## Components & Data
Products are defined as a constant array in `App.jsx`:
```js
const products = [
	{ name: 'Wireless Mouse', price: 25.99, inStock: true },
	{ name: 'Keyboard',      price: 45.50, inStock: false },
	{ name: 'Monitor',       price: 199.99, inStock: true }
];
```
Each object is handed to `ProductCard` via the `product` prop.

### `ProductCard.jsx`
Renders a bordered panel with name, price, and a stock status line. Shows an image only if the product supplies `image`.

### `App.jsx`
Imports the array, lays out three `ProductCard` instances inside a flex container. (A future enhancement would map over the array instead of manually listing each.)

## Render / Data Flow (Simple Passive Flow)
1. React starts at `main.jsx`, mounts `<App />` into `#root`.
2. `App` returns JSX containing multiple `ProductCard` elements.
3. Each `ProductCard` receives a `product` object; JSX is converted to DOM nodes by React.
4. No state changes occur yet (static data) → no re-renders after initial mount.

## Minimal Code Walkthrough
`main.jsx`: createRoot(...).render(<StrictMode><App /></StrictMode>)
`App.jsx`: define products array → return a flex row with three `<ProductCard product={...} />` calls.
`ProductCard.jsx`: destructure `product` prop → conditionally render image → display fields and a ternary for stock status.

## What's New
Focused list of genuinely new ideas compared to relevant earlier experiments (referencing the first place a related idea appeared):

1. React + Build Tooling (New vs all prior)  
	First introduction of a framework (React) and a dev build tool (Vite) → replaces manual `<script>` inclusion used in Experiments 1–6 with a module graph, fast HMR, and production bundling.

2. Declarative Component Model (Advances Exp 4 & 5)  
	Instead of imperatively mutating the DOM (character count, filter show/hide), UI is expressed as a pure function of data (array of product objects → JSX tree). No manual query/select/update cycle.

3. Reusable Presentational Component (New)  
	`ProductCard` encapsulates structure + styling once; prior experiments duplicated markup patterns or manipulated existing DOM nodes directly.

4. Prop-Driven Data Flow (Evolution of passing raw values)  
	Moves from reading values out of the DOM (e.g., textarea value, `data-category`) to pushing data down via props. This enables predictable one‑way data flow and easier future state lifting.

5. Clean Separation of Entry & UI (New structural pattern)  
	Distinct entry file (`main.jsx`) performs mounting only; `App.jsx` organizes data + layout; leaf component handles rendering. Earlier experiments blended setup logic and rendering in a single script.

6. Future State & Lists Scaffold (Preparation)  
	Although still static, the static `products` array and component boundaries set the stage for mapping (`products.map`) and state updates (`useState`)—a shift from ad‑hoc event handlers mutating the DOM.

7. Inline Styling as Rapid Prototype (Contrast to Exp 2 & 3 CSS Layout Focus)  
	Uses quick inline style objects for component-local styling instead of dedicated layout systems (Flexbox/Grid exercises). Demonstrates early-phase ergonomics; can later migrate to CSS modules or utility classes.

> Core leap: from “find & mutate DOM” to “declare component tree from data.”

## Potential Enhancements
- Replace manual card instances with `products.map()`
- Add filtering (recreate Exp 5 logic declaratively)
- Lift `products` to fetched remote JSON
- Add state: toggle stock, add to cart, dynamic price formatting
- Prop validation (TypeScript or runtime checks)
- Styling upgrade (CSS Modules, Tailwind, or styled-components)

## File Structure
```
Experiment-7/
├── index.html            # Root HTML with #root mount point
├── src/
│   ├── main.jsx          # React entry
│   ├── App.jsx           # Root component + data array
│   ├── ProductCard.jsx   # Presentational card component
│   ├── App.css / index.css
│   └── assets/
├── vite.config.js        # Vite build config
├── package.json          # Scripts + dependencies
└── README.md             # This document
```

## Quick Start
```bash
npm install
npm run dev    # Start dev server (Vite + HMR)
               # Open the shown localhost URL
```

## Learning Objectives
- Understand React component + prop model
- Contrast declarative rendering with prior imperative DOM edits
- Prepare for introducing state (`useState`) and lists (`Array.map`)
- Establish a baseline React + Vite toolchain

---