# Admin Dashboard Project - Experiment 3

A professional admin dashboard interface built with HTML and CSS Grid layout, featuring theme switching functionality between light and dark modes. This project demonstrates advanced CSS Grid layout techniques combined with CSS custom properties to create a responsive admin dashboard with seamless theme switching capabilities.

## Components Used

### HTML Elements
- `<input type="checkbox">` - Hidden theme toggle trigger
- `<div class="dashboard">` - Main grid container
- `<header>` - Top navigation bar with title and theme toggle
- `<nav>` - Left sidebar with navigation menu
- `<main>` - Primary content display area
- `<footer>` - Bottom information bar
- `<ul>` and `<li>` - Navigation menu structure
- `<label>` - Theme toggle interface element

### CSS Technologies
- **CSS Grid Layout** - Primary layout system
- **CSS Custom Properties (Variables)** - Dynamic theming
- **Flexbox** - Internal header layout
- **CSS Selectors** - Element targeting and theme switching
- **Pseudo-selectors** - `:checked` state for theme toggle

## CSS Styling Breakdown

### Grid Layout System
```css
.dashboard {
    display: grid;
    grid-template-columns: 280px auto;  /* Fixed sidebar, flexible content */
    grid-template-rows: 100px auto 50px; /* Fixed header/footer, flexible main */
    height: 100vh; /* Full viewport coverage */
}
```

### Theme Variables Architecture
```css
:root {
    --bg-header: #02c902;   /* Light theme colors */
    --bg-nav: #e5e9e6;
    --bg-main: #f0f0f0;
    --bg-footer: #02c902;
    --text-color: #000000;
}
```

### Theme Switching Mechanism
```css
#themeToggle:checked ~ .dashboard {
    --bg-header: #1b5e1f;   /* Dark theme colors */
    --bg-nav: #1a1a1a;
    --bg-main: #2a2a2a;
    --bg-footer: #1b5e1f;
    --text-color: #ffffff;
}
```

## Key CSS Properties Used

### Grid Properties
- `display: grid` - Establishes grid formatting context
- `grid-template-columns` - Defines column track sizes
- `grid-template-rows` - Defines row track sizes  
- `grid-column` - Controls element spanning across columns
- `height: 100vh` - Full viewport height coverage

### Flexbox Properties (Header Layout)
- `display: flex` - Flexible box layout for header content
- `justify-content: space-between` - Distributes items with space between
- `align-items: center` - Vertically centers flex items

### CSS Custom Properties
- `var()` function - Accesses CSS variable values
- `--variable-name` - Defines custom properties for reusable values

### Advanced Selectors
- `#themeToggle:checked ~ .dashboard` - Sibling selector with pseudo-class
- `:root` - Document root element selector for global variables

## New Techniques Learned in Experiment-3

### Advanced Layout Management
1. **CSS Grid Mastery** - Two-dimensional layout system replacing simpler positioning
2. **Grid Template Areas** - Semantic layout definition using named grid areas
3. **Viewport Units** - Using `100vh` for full-screen dashboard layouts
4. **Grid Spanning** - Elements spanning multiple columns/rows with `grid-column`

### Dynamic Theming System
1. **CSS Custom Properties** - Variable-based styling for theme management
2. **Pure CSS Theme Switching** - No JavaScript required for theme changes
3. **Checkbox-based Toggles** - Hidden form elements as state controllers
4. **Sibling Selector Logic** - Advanced CSS selector combinations

## Comparative Analysis with Previous Experiments

### Evolution of Techniques
1. **Experiment-1**: Basic HTML forms with simple CSS
2. **Experiment-2**: Introduced Flexbox for centering and layout
3. **Experiment-3**: Advanced Grid system with theme switching and CSS variables

### Progressive Enhancement
- **Layout Evolution**: Block → Flexbox → Grid
- **Styling Evolution**: Direct CSS → Flexbox properties → Custom properties
- **Functionality Evolution**: Static → Interactive buttons → Theme switching
- **Structure Evolution**: Simple forms → Centered interfaces → Multi-section dashboards

## Color Schemes

### Light Theme (Default)
- Header/Footer: Bright green (#02c902)
- Navigation: Light gray (#e5e9e6)
- Main Content: Very light gray (#f0f0f0)
- Text: Black (#000000)

### Dark Theme
- Header/Footer: Dark green (#1b5e1f)
- Navigation: Very dark gray (#1a1a1a)
- Main Content: Dark gray (#2a2a2a)
- Text: White (#ffffff)

## File Structure

```
Experiment-3/
├── Experiment-3.html         # Main HTML file
└── styles.css               # CSS styles and layout
```


## Learning Objectives

This experiment demonstrates mastery of:
- Advanced CSS Grid layout techniques
- CSS custom properties for dynamic theming
- Pure CSS theme switching mechanisms
- Professional dashboard interface design
- Responsive design principles with Grid
- Semantic HTML5 structure implementation

---