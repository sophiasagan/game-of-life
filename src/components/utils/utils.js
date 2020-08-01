import { pulsar, glider, gliderLeft, bob, castle } from "../Patterns/patterns";
import Cell from "../Cell/Cell";

// Returns a preconfigured golGrid
export const getGrid = (shape) => {
  let newGrid = createGrid();
  switch (shape) {
    case "home":
      return home(newGrid);
    default:
      break;
  }
};

const home = (golGrid) => {
  pulsar(golGrid);
  glider(golGrid);
  gliderLeft(golGrid);
  bob(golGrid);
  castle(golGrid);
  golGrid[46].fill(1);

  return golGrid;
};
export const gridSize = 50;

// Represents all possible neighbors of a cell
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const cellSide = Math.round(gridSize / Cell);

// Finds the number of neighbors of a cell
const getNeighbors = (i, j, golGrid) => {
  let neighbors = 0;
  operations.forEach(([x, y]) => {
    const newI = i + x;
    const newJ = j + y;
    if (newI >= 0 && newI < gridSize && newJ >= 0 && newJ < gridSize) {
      neighbors += golGrid[newI][newJ];
    }
  });
  return neighbors;
};

// Takes in a golGrid and returns a new golGrid based on the rules of life
export const nextGrid = (golGrid) => {
  let newGrid = createGrid();
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let neighbors = getNeighbors(i, j, golGrid);
      // Determine which cells live and die
      newGrid[i][j] =
        neighbors === 3 || (neighbors === 2 && golGrid[i][j] === 1) ? 1 : 0;
    }
  }
  return newGrid;
};

// Generates a golGrid filled with dead cells
export const createGrid = () => {
  const rows = [];
  for (let i = 0; i < gridSize; i++) {
    rows.push(Array.from(Array(gridSize), () => 0));
  }
  return rows;
};

// Generates a golGrid with random dead and alive cells
export const generateRandomGrid = () => {
  const rows = [];
  for (let i = 0; i < gridSize; i++) {
    rows.push(Array.from(Array(gridSize), () => (Math.random() > 0.7 ? 1 : 0)));
  }
  return rows;
};

// export const borders = (row: Number, col: Number) => {
//   const size = this.cellSide;
//   let wrap = [-1, 0, 1];
//   let row_index;
//   let col_index;
//   let sum = 0;
//   for (let i = 0; i < gridSize; i++) {
//     for (let j = 0; j < gridSize; j++) {
//       row_index = (row + wrap[i]) % size;
//       col_index = (col + wrap[j]) % size;
//       if (wrap[i] !== 0 || wrap[j] !== 0) {
//         sum += this.state.grid.currentGrit.value(row_index, col_index);
//       }
//     }
//   }

//   return sum;
// };
