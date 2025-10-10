# Person Class Hierarchy – Experiment 9

An object‑oriented JavaScript exercise focused on **ES6 class inheritance**. This builds naturally on prior experiments:
- Earlier DOM + event fundamentals (Experiments 4–6)
- Structured thinking and data-driven UI (React Experiments 7–8)
- Progressive abstraction mindset (moving from raw DOM to modeling domain entities)

Here the emphasis shifts from *how to update UI* to *how to model related concepts* using a base class (`Person`) and specialized subclasses (`Student`, `Teacher`).

## Objective
Practice creating a reusable parent class, extending it, and overriding / extending behavior. Understand: constructor chaining with `super`, method reuse, and specialization.

## Components (Files)
```
Experiment-9/
├── index.html      # Markup container + list + detail panel
├── styles.css      # Basic layout & list styling (consistent with earlier experiments)
├── script.js       # Class definitions + instance creation + DOM rendering
└── README.md       # Documentation
```

## Core Classes
```js
class Person {
  constructor(name, age) { this.name = name; this.age = age; }
  getInfo() { return `${this.name} (Age: ${this.age})`; }
  getFullDetails() { return this.getInfo(); }
}

class Student extends Person {
  constructor(name, age, course) { super(name, age); this.course = course; }
  getFullDetails() { return `${this.getInfo()}\nRole: Student\nCourse: ${this.course}`; }
}

class Teacher extends Person {
  constructor(name, age, subject) { super(name, age); this.subject = subject; }
  getFullDetails() { return `${this.getInfo()}\nRole: Teacher\nSubject: ${this.subject}`; }
}
```

### Key Ideas
| Concept | Demonstrated By |
|---------|-----------------|
| Base class | `Person` |
| Property inheritance | `name`, `age` reused in subclasses |
| `super()` call | Inside `Student` / `Teacher` constructors |
| Method reuse | `getInfo()` called inside overriding methods |
| Overriding / extension | `getFullDetails()` specialized per subclass |

## Interactive Mechanism
1. Instances of `Student` and `Teacher` are created in an array `people`.
2. The list renders each person's name with a View button.
3. Clicking View calls that instance's `getFullDetails()` → detail panel updates.
4. Overridden methods show role‑specific lines (Student = Course, Teacher = Subject).

### Flow Summary
```
Create classes → instantiate objects → render list → user clicks → show details
```

## DOM Integration (Minimal & Familiar)
- Similar style to Experiments 5 & 8: build a list dynamically.
- Uses classic `for` loop + IIFE pattern (matching earlier vanilla style) instead of advanced functional chaining.
- Simple `textContent` updates; no frameworks.

## Comparison With Earlier Experiments
| Aspect | Earlier Vanilla (4–6) | React Intro (7) | React State (8) | This Experiment (9) |
|--------|-----------------------|-----------------|-----------------|---------------------|
| Focus | Events + DOM updates | Components/props | State + lists | Class inheritance |
| Data Model | Ad-hoc variables | Static array | Mutable array state | Hierarchy instances |
| Abstraction | Functional/event | Declarative render | Derived filtering | OOP structure |
| Reusability | Functions only | Component reuse | Dynamic mapping | Inherited methods |

## Potential Enhancements
- Add `Staff` or `Guest` subclass for more variety
- Add a shared method (e.g., `celebrateBirthday()` increments age)
- Convert to React (map over instances, show selected details)
- Introduce an interface-like pattern (TypeScript) for stronger typing
- Add ability to add new people via a small form

## Learning Objectives Reinforced
- Understand prototype chain via `class` syntax
- Practice method overriding + reuse
- Maintain readable, incremental progression from simpler experiments
- Connect conceptual modeling with UI presentation

## Key Takeaways
- Inheritance helps avoid repeating shared properties/methods.
- Overriding lets subclasses specialize behavior while still reusing base logic.
- Keep classes focused: data + behavior; leave rendering to separate functions.

## How to Run
Open `index.html` in a browser. Click *View* next to each person.

(No build step—pure HTML/CSS/JS like earlier non-React experiments.)

---
**Next Step Suggestion:** Add a button to "Add Student" that pushes a new `Student` into the array and re-renders—reinforcing dynamic list modification without React.
