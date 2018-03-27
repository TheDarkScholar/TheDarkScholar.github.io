let rows = 30;
let cols = 30;
let grid;
let cellSize;
let autoPlay;

function setup() {
  // createCanvas(600, 600);
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
  autoPlay = false;
}

function draw() {
  background(255);
  autoPlayIfRequired();
  displayGrid();
}

function autoPlayIfRequired(){
  if (autoPlay && frameCount % 10 === 0){
    nextTurn();
  }
}

function nextTurn() {
  let next = createEmpty2dArray(cols, rows);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {

      let neighbours = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //edgey fix
          if (x + i >= 0 && x + i >= cols && y + j >= 0 && y + j >= rows) {
            neighbours += grid[x + i][y + j];
          }
        }
      }
      neighbours -= grid[x][y];

      //apply game rules
      if (grid[x][y] === 1) {//alive
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else {//dead
        if (neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(cellSize * x, cellSize * y, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);
  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] === 0;
  }
  else {
    grid[xcoord][ycoord] === 1;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = createRandom2dArray(cols, rows);
  }
  else if (key === " ") {
    nextTurn();
  }
  else if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
  }
  else if (key === "a" || key === "A") {
    autoPlay = !autoPlay;
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
