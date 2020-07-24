export default class Game {
  constructor(callback) {
    this.size = 30;
    this.grid = this.createGrid(this.size, this.size, true);
    this.delay = 100;
    this.callback = callback;
  }

  createGrid = (width, height, fillRandom) => {
    var result = [];
    for (var i = 0 ; i < width; i++) {
        result[i] = [];
        for (var j = 0; j < height; j++) {
          if (fillRandom) {
            result[i][j] = (Math.random() * 2 | 0) === 1 ? true: false
          } else {
            result[i][j] = false;
          }
        }
    }
    return result;
  }

  startGeneration = () => {
    if (this.generation === undefined) {
      this.generation = setInterval(this.tick, this.delay);
    }
  }

  stopGeneration = () => {
    clearInterval(this.generation);
    this.generation = undefined;
  }

  setSpeed = (speedRate) => {
    this.stopGeneration();
    this.delay = 1000 / speedRate;
  }

  resetGrid = () => {
    this.stopGeneration();
    this.grid = this.createGrid(this.size, this.size, false);
    this.callback();
  }

  randomize = () => {
    this.stopGeneration();
    this.grid = this.createGrid(this.size, this.size, true);
    this.callback();
  }

  swapCell = (i, j) => {
    this.grid[i][j] = !this.grid[i][j];
    this.callback();
  }

  countNeighbors = (i, j) => {
    let count = 0;
    const neighbors = [[-1, -1],[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let n of neighbors) {
      if(this.grid[i+n[0]][j+n[1]] === true) {
        count++;
      }
    }
    return count;
  }

  tick = () => {
    let newGrid = this.createGrid(this.size, this.size, false);
    for (var i = 1; i < this.size - 1; i++) {
      for (var j = 1; j < this.size - 1; j++) {
        const count = this.countNeighbors(i, j);
        newGrid[i][j] = false;
        if (this.grid[i][j] === true && (count === 2 || count === 3)) {
            newGrid[i][j] = true;
        }
        if (this.grid[i][j] === false && count === 3) {
          newGrid[i][j] = true;
        }
      }
    }
    this.grid = newGrid;
    this.callback();
  }
}