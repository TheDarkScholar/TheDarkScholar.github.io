let rows = 75;
let cols = 75;
let grid;
let cellSize;
let autoPlay = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createEmpty2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else if (grid[x][y] === 1){
        fill(0);
      }
      else if (grid[x][y] === 2){
        fill(255,0,0);
      }
      else if (grid[x][y] === 3){
        fill(0,255,0);
      }
      else if (grid[x][y] === 4){
        fill(0,0,255);
      }
      rect(x*cellSize-1,y*cellSize+2, cellSize, cellSize);
    }
  }
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

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);
  if (grid[xcoord][ycoord] === 0) {
    grid[xcoord][ycoord] = 1;
  }
  else if (grid[xcoord][ycoord] === 1){
    grid[xcoord][ycoord] = 2;
  }
  else if (grid[xcoord][ycoord] === 2){
    grid[xcoord][ycoord] = 3;
  }
  else if (grid[xcoord][ycoord] === 3){
    grid[xcoord][ycoord] = 4;
  }
  else if (grid[xcoord][ycoord] === 4){
    grid[xcoord][ycoord] = 0;
  }
}
function keyPressed() {
  if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
  }
}
