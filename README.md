# Tic-Tac-Toe Game

An interactive Tic-Tac-Toe game built with vanilla JavaScript, implementing advanced design patterns including Factory Functions and IIFE for clean, maintainable code architecture.

## [View Live Demo](https://vedantpanchariya.github.io/SCT_WD_3/)

## Features

- **Custom Player Names**: Enter player names before starting
- **Real-time Game State**: Live updates showing current player and game status
- **Win Detection**: Automatic win/tie detection with pattern matching algorithm
- **Game Reset**: Restart functionality to play multiple rounds
- **Responsive Design**: Clean UI with CSS Grid layout
- **Interactive Feedback**: Hover effects and visual state changes

## Technologies Used

- JavaScript (ES6+)
- HTML5
- CSS3 (Grid, Flexbox)
- Design Patterns (Factory Functions, IIFE/Module Pattern)

## Technical Highlights

**Advanced JavaScript Patterns:**
- **Factory Functions** for creating player objects with encapsulated data
- **IIFE (Immediately Invoked Function Expressions)** for singleton modules
- **Closures** for private variables and data hiding
- **Module Pattern** for separation of concerns

**Architecture:**
- `Gameboard` module: Manages game board state
- `Game` module: Controls game logic and flow
- `DisplayController` module: Handles DOM manipulation
- `createPlayer` factory: Creates player instances

**Key Concepts:**
- Zero global scope pollution
- True private variables through closures
- Separation of concerns
- Single Responsibility Principle

## Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/tic-tac-toe.git

# Open index.html in your browser
# No build process required - vanilla JavaScript!
```

## Code Structure
```javascript
// Module Pattern (IIFE)
const Gameboard = (() => {
  let board = Array(9).fill(null);
  // Private variables and methods
  return {
    // Public API
  };
})();

// Factory Function
const createPlayer = (name, marker) => {
  let moves = [];
  // Private variable
  return {
    // Public methods
  };
};
```

## What I Learned

- **Design Patterns**: Factory Functions vs Classes, Module Pattern benefits
- **Closures**: How to create truly private variables in JavaScript
- **Scope Management**: Preventing global namespace pollution
- **Algorithm Design**: Win detection using pattern matching
- **Code Architecture**: Building maintainable, scalable applications
- **Separation of Concerns**: Independent, testable modules

## How It Works

1. **Initialization**: Players enter names, game initializes with empty board
2. **Game Loop**: Players take turns clicking cells to place markers
3. **Win Detection**: After each move, checks all winning patterns
4. **Game Over**: Displays winner or tie, allows restart

## Future Enhancements

- Add AI opponent (minimax algorithm)
- Implement score tracking across multiple games
- Add animations for moves and wins
- Create difficulty levels for AI
- Add sound effects
- Make it multiplayer over network

## Why These Patterns?

**Factory Functions over Classes:**
- More flexible
- Easier to understand
- True private variables without # syntax
- No `this` binding issues

**IIFE for Modules:**
- Immediate execution creates closure
- Single instance (singleton)
- Private state management
- Clean public API

## License

MIT License
