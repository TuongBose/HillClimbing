# Hill Climbing Algorithm Visualization

This project demonstrates the Hill Climbing algorithm through an interactive web-based visualization. The algorithm is implemented in JavaScript and visualizes the process of finding local maxima in a randomly generated landscape.

## Project Structure

```
├── index.html      # Main HTML file containing the user interface
├── script.js       # JavaScript implementation of the Hill Climbing algorithm
└── README.md       # Project documentation
```

## How to Run

1. Simply open `index.html` in a web browser
2. Click the "Run Hill Climbing" button to start the algorithm
3. Watch as the algorithm traverses the landscape to find a local maximum

## Code Structure

The project consists of several key components:

### 1. Landscape Generation
- `generateLandscape()`: Creates a 10x10 grid with random values (1-50)
- `displayLandscape()`: Renders the landscape as an HTML table

### 2. Hill Climbing Implementation
- `findNeighbours()`: Identifies all valid neighboring positions (8-directional)
- `hillClimb()`: Core algorithm that finds the next best position
- `runHillClimbing()`: Main function that coordinates the algorithm execution

## Algorithm Description

The Hill Climbing algorithm implemented here:
1. Starts from a random position (3,6)
2. Checks all 8 neighboring positions
3. Moves to the neighbor with the highest value (if higher than current)
4. Continues until no better position is found (local maximum)

## Code Conventions

1. **Naming Conventions**
   - Functions use camelCase
   - Variables use camelCase
   - Constants use UPPERCASE

2. **Code Style**
   - Each function has a single responsibility
   - Clear variable names that describe their purpose
   - Consistent indentation using spaces
   - Array and object destructuring for cleaner code

3. **Documentation**
   - Each step of the algorithm is logged in the UI
   - Progress is displayed with coordinates and values
   - Final state is clearly shown when algorithm completes

## Output

The visualization shows:
- The generated landscape as a grid
- Step-by-step progression of the algorithm
- Current position and value at each step
- Final position and value when a local maximum is reached