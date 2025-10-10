# Freehand Drawing Tool - Experiment 6

A simple freehand drawing tool where you click and drag to draw blue lines. Although the original idea mentioned **SVG**, this implementation intentionally uses an HTML `<canvas>` (as required) together with basic mouse event handling. The focus is on practicing coordinate math, event flow, and incremental line drawing using your current beginner JavaScript style.

## Components Used

### HTML Elements
- `<div class="drawing-container">` – Wrapper box
- `<h1>` – Title
- `<canvas id="drawArea">` – Drawing surface (800×400)

### JavaScript Techniques
- `DOMContentLoaded` – Delay setup until the DOM is ready
- Mouse events: `mousedown`, `mousemove`, `mouseup`, `mouseleave`
- 2D context drawing (`beginPath`, `moveTo`, `lineTo`, `stroke`)
- Coordinate conversion with `getBoundingClientRect()`
- Simple state tracking variables (`isDrawing`, `lastX`, `lastY`)

### CSS Techniques
- Box styling (border, padding, max-width)
- Light background for canvas region
- Full‑width responsive canvas inside container

## Interactive Mechanism
1. Press mouse down inside canvas → start drawing (store starting x,y)
2. Move mouse while button held → draw short line segments from last point to new point
3. Release mouse or leave the canvas → stop drawing
4. Repeat to create more strokes (each stroke is a continuous set of small segments)

### Flow
```
mousedown  -> set isDrawing = true, record start position
mousemove  -> if isDrawing: draw line from last point to current point, update last point
mouseup    -> isDrawing = false
mouseleave -> isDrawing = false
```

## Core JavaScript
```javascript
window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('drawArea');
    var ctx = canvas.getContext('2d');

    var isDrawing = false;
    var lastX = 0;
    var lastY = 0;

    ctx.strokeStyle = '#0b6ebf';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    function getPos(evt) {
        var rect = canvas.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    }

    canvas.addEventListener('mousedown', function (evt) {
        isDrawing = true;
        var p = getPos(evt);
        lastX = p.x;
        lastY = p.y;
    });

    canvas.addEventListener('mousemove', function (evt) {
        if (!isDrawing) return;
        var p = getPos(evt);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        lastX = p.x;
        lastY = p.y;
    });

    function stop() { isDrawing = false; }
    canvas.addEventListener('mouseup', stop);
    canvas.addEventListener('mouseleave', stop);
});
```

### Flow Summary
1. Wait for DOM
2. Grab canvas + context
3. Prepare drawing style (stroke color, width)
4. Start drawing on `mousedown`
5. Draw tiny segments on each `mousemove`
6. Stop on `mouseup` or `mouseleave`

## Key Logic & APIs
- `canvas.getContext('2d')` – Access the drawing API
- `ctx.beginPath()` / `moveTo()` / `lineTo()` / `stroke()` – Render line segments
- `getBoundingClientRect()` – Translate window coordinates to canvas local space
- State variable `isDrawing` – Prevents drawing when mouse is not pressed

## Comparison With Previous Experiments
| Aspect | Experiment 4 (Character Counter) | Experiment 5 (Product Filter) | Experiment 6 (Drawing) |
|--------|----------------------------------|--------------------------------|------------------------|
| Main Interaction | Text input typing | Dropdown change | Continuous mouse drag |
| Data Source | User text value | Pre-set list items | Pointer positions |
| DOM Update | Update number text | Show / hide items | Immediate pixel drawing |
| Technique Focus | Event + regex count | Data attribute filtering | Coordinate drawing & canvas |
| New Concept | Counting chars | Data attributes | Canvas 2D API |

## Potential Enhancements
- Clear button to wipe the canvas
- Color picker (change stroke color)
- Stroke width selector
- Save drawing as image (`canvas.toDataURL()`)
- Touch support (`touchstart`, `touchmove`, `touchend`)
- Undo last stroke (store paths separately)

## File Structure
```
Experiment-6/
├── Experiment-6.html
├── styles.css
├── script.js
└── README.md
```

## Learning Objectives
- Practice continuous mouse event handling
- Convert client (window) coordinates to local canvas coordinates
- Use basic 2D canvas drawing commands
- Manage simple drawing state with flags and last-point memory
- Reinforce separation of HTML (structure), CSS (style), and JS (behavior)

---