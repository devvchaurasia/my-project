# Dynamic Product Filter - Experiment 5

An interactive web component that filters a list of products by category in real time using a `<select>` dropdown. This experiment extends prior DOM manipulation practice (Experiment 4) from reactive text measurement to conditional content visibility, emphasizing data attributes, efficient querying, and accessible UI updates.

## Components Used

### HTML Elements
- `<div class="product-container">` – Main wrapper
- `<h1>` – Section heading
- `<div class="controls">` – Group for form controls
- `<label for="categoryFilter">` – Accessible label
- `<select id="categoryFilter">` – Category selector (filter trigger)
- `<ul id="productList" aria-live="polite">` – Dynamic results region
- `<li class="product-item" data-category="...">` – Individual filterable items

### JavaScript Techniques
- `DOMContentLoaded` event – Safe DOM access after parse
- Element selection: `getElementById`, `querySelectorAll`
- Data attributes via `getAttribute('data-category')`
- Event handling: `change` listener on `<select>`
- Iteration with classic `for` loop for NodeList performance predictability
- Conditional rendering by toggling `style.display`

### CSS Techniques
- Basic box model for spacing (`margin`, `padding`, `border`)
- Bordered card-style list items
- Flex layout for control grouping (`display: flex; gap:`)

## Interactive Mechanism
1. On load, script caches references to the dropdown and product items.
2. A handler compares the currently selected category with each item's `data-category`.
3. Items not matching (and not in the "All" view) are hidden (`display: 'none'`).
4. Matching items (or all when "All" is selected) are shown (`display: ''`).
5. Initial invocation ensures the UI reflects the default filter immediately.

### Accessibility Note
- `aria-live="polite"` on the `<ul>` hints assistive tech that the visible set changes; because items are only shown/hidden (not added/removed), this is a mild enhancement. For fuller announcements, one could inject a status line with counts.

---

## JavaScript (Line-by-Line Walkthrough)
```javascript
window.addEventListener('DOMContentLoaded', function () { // Wait until DOM is ready
	var select = document.getElementById('categoryFilter'); // Dropdown control
	var items = document.querySelectorAll('.product-item'); // NodeList of products

	function applyFilter() { // Core filtering logic
		var selected = select.value; // Current category selection
		for (var i = 0; i < items.length; i++) { // Loop through product items
			var item = items[i];
			var category = item.getAttribute('data-category'); // Read item category
			if (selected === 'All' || selected === category) { // Match or wildcard
				item.style.display = ''; // Show (use default CSS display)
			} else {
				item.style.display = 'none'; // Hide non-matching item
			}
		}
	}

	select.addEventListener('change', applyFilter); // Re-filter on user change
	applyFilter(); // Initial render state
});
```

### Flow Summary
1. Wait for DOM.
2. Cache references.
3. Define filter function.
4. Attach `change` event.
5. Execute once to sync initial state.

## Key Logic & APIs
- `select.value` – Current chosen category
- `querySelectorAll('.product-item')` – Bulk item selection
- `data-category` attributes – Semantic categorization without extra classes
- `style.display` toggling – Minimal DOM mutation vs rebuilding list

## New / Reinforced Techniques
- Using `data-*` attributes for lightweight metadata
- Select-based filtering vs freeform input
- Separation of concerns: single `applyFilter` function reused for both initial and event-driven updates
- Simple progressive enhancement (works if JS loads; otherwise full list is visible)

## Comparison with Prior Experiment
| Aspect | Experiment 4 (Character Counter) | Experiment 5 (Product Filter) |
|--------|----------------------------------|-------------------------------|
| Primary Interaction | Text input events | Dropdown selection |
| Core Logic | Counting characters (regex + value length) | Conditional visibility (category match) |
| Data Source | User-entered text | Predefined list items | 
| Accessibility | Live count feedback | Filtered list (aria-live) |
| DOM Writes | Single textContent update | Multiple style.display toggles |

## Potential Enhancements
- Animated transitions (opacity/height) for smoother hide/show
- Multi-select or checkbox filters (combine categories)
- Text search combined with category filter
- Extract data to JSON and render list dynamically
- Add count summary (e.g., "Showing 4 of 6 items") for screen readers

## File Structure
```
Experiment-5/
├── Experiment-5.html   # Markup with filter UI and product list
├── styles.css          # Basic layout and visual styling
├── script.js           # Filtering logic
└── README.md           # Documentation
```

## Learning Objectives
- Practice DOM selection and event-driven filtering
- Use `data-*` attributes for semantic filtering
- Implement accessible, minimally intrusive UI updates
- Reinforce separation between structure (HTML), style (CSS), and behavior (JS)

---