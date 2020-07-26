export default class Game {
  constructor(callback) {
    this.size = 40;
    this.grid = this.createGrid(this.size, this.size, true);
    this.delay = 400;
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
  };

  startGeneration = () => {
    if (this.generation === undefined) {
      this.generation = setInterval(this.gen, this.delay);
    }
  };

  stopGeneration = () => {
    clearInterval(this.generation);
    this.generation = undefined;
  };

  setSpeed = speedRate => {
    this.stopGeneration();
    this.delay = 1000 / speedRate;
    this.startGeneration();
  };

  resetGrid = () => {
    this.stopGeneration();
    this.grid = this.createGrid(this.size, this.size, false);
    this.callback();
  };

  randomize = () => {
    this.stopGeneration();
    this.grid = this.createGrid(this.size, this.size, true);
    this.callback();
  };

  swapCell = (i, j) => {
    this.grid[i][j] = !this.grid[i][j];
    this.callback();
  };

  countNeighbors = (i, j, neighbors) => {
    let count = 0;
    // const neighbors = [[-1, -1],[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let n of neighbors) {
      if(this.grid[i+n[0]][j+n[1]] === true) {
        count++;
      }
    }
    return count;
  };

  operations = (i,j) => {
    const midCell = [[-1, -1],[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const leftNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    const rightNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    const leftTopNeighbor = [[this.size - 1, this.size - 1], [this.size - 1, 0], [this.size - 1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    const rightTopNeighbor = [[this.size - 1, -1], [this.size - 1, 0], [this.size - 1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    const topNeighbor = [[this.size - 1, -1], [0, -1], [1, -1], [this.size - 1, 0], [1, 0], [this.size - 1, 1], [0, 1], [1, 1]];
    const bottomNeighbor = [[-1, -1], [0, -1], [1 - this.size, -1], [-1, 0], [1 - this.size, 0], [-1, 1], [0, 1], [1 - this.size, 1]];
    const leftBottomNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1 - this.size, this.size - 1], [1 - this.size, 0], [1 - this.size, 1]];
    const rightBottomNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1 - this.size, -1], [1 - this.size, 0], [1 - this.size, 1 - this.size]];

    let count = 0;
    if (i === 0 && j === 0) {
      count = this.countNeighbors(i, j, leftTopNeighbor);
    } else if (i === 0 && j === this.size - 1) {
      count = this.countNeighbors(i, j, rightTopNeighbor);
    } else if (i === this.size - 1 && j === 0) {
      count = this.countNeighbors(i, j, leftBottomNeighbor);
    } else if (i === this.size - 1 && j === this.size - 1) {
      count = this.countNeighbors(i, j, rightBottomNeighbor);
    } else if (j === 0) {
      count = this.countNeighbors(i, j, leftNeighbor);
    } else if (j === this.size - 1) {
      count = this.countNeighbors(i, j, rightNeighbor);
    } else if (i === 0) {
      count = this.countNeighbors(i, j, topNeighbor);
    } else if (i === this.size - 1) {
      count = this.countNeighbors(i, j, bottomNeighbor);
    } else
      count = this.countNeighbors(i, j, midCell);
    return count;
  };
  
  gen = () => {
    let newGrid = this.createGrid(this.size, this.size, false);
    for (let i = 0; i < this.size; i++){
    // for (var i = 1; i < this.size - 1; i++) {
    //   for (var j = 1; j < this.size - 1; j++) {
    //     const count = this.countNeighbors(i, j);
    
    // const midCell = [[-1, -1],[-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    // const leftNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    // const rightNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    // const leftTopNeighbor = [[this.size - 1, this.size - 1], [this.size - 1, 0], [this.size - 1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    // const rightTopNeighbor = [[this.size - 1, -1], [this.size - 1, 0], [this.size - 1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    // const topNeighbor = [[this.size - 1, -1], [0, -1], [1, -1], [this.size - 1, 0], [1, 0], [this.size - 1, 1], [0, 1], [1, 1]];
    // const bottomNeighbor = [[-1, -1], [0, -1], [1 - this.size, -1], [-1, 0], [1 - this.size, 0], [-1, 1], [0, 1], [1 - this.size, 1]];
    // const leftBottomNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1 - this.size, this.size - 1], [1 - this.size, 0], [1 - this.size, 1]];
    // const rightBottomNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1 - this.size, -1], [1 - this.size, 0], [1 - this.size, 1 - this.size]];
    
    // for (var j = 1; j < this.size - 1; j++) {	    
    //   const count = this.countNeighbors(i, j);	
    
    // leftNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    // rightNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    // leftTopNeighbor = [[this.size - 1, this.size - 1], [this.size - 1, 0], [this.size - 1, 1], [0, this.size - 1], [0, 1], [1, this.size - 1], [1, 0], [1, 1]];
    // rightTopNeighbor = [[this.size - 1, -1], [this.size - 1, 0], [this.size - 1, 1 - this.size], [0, -1], [0, 1 - this.size], [1, -1], [1, 0], [1, 1 - this.size]];
    // topNeighbor = [[this.size - 1, -1], [0, -1], [1, -1], [this.size - 1, 0], [1, 0], [this.size - 1, 1], [0, 1], [1, 1]];
    // bottomNeighbor = [[-1, -1], [0, -1], [1 - this.size, -1], [-1, 0], [1 - this.size, 0], [-1, 1], [0, 1], [1 - this.size, 1]];
    // leftBottomNeighbor = [[-1, this.size - 1], [-1, 0], [-1, 1], [0, this.size - 1], [0, 1], [1 - this.size, this.size - 1], [1 - this.size, 0], [1 - this.size, 1]];
    // rightBottomNeighbor = [[-1, -1], [-1, 0], [-1, 1 - this.size], [0, -1], [0, 1 - this.size], [1 - this.size, -1], [1 - this.size, 0], [1 - this.size, 1 - this.size]];

    // for (let i = 1; i < this.size - 1; i++) {
    for (let j = 0; j < this.size; j++) {
        const count = this.operations(i, j);
    // for (let j = 0; j < this.size; j++) {
    //     const count = this.operations(i, j);[]
        newGrid[i][j] = false;
        if (this.grid[i][j] === true && (count === 2 || count === 3)) {
            newGrid[i][j] = true;
        }
        if (this.grid[i][j] === false && count === 3){
            newGrid[i][j] = true;
        }
    }
}   
      
    
    this.grid = newGrid;
    this.callback();
  };
  }

