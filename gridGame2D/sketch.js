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
          if (x + i >= 0 && x + i < cols && y + j >= 0 && y + j < rows) {
            neighbours += grid[x + i][y + j];
          }
        }
      }
      neighbours -= grid[x][y];

      //apply game rules
      //Living rules
      if (grid[x][y] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else if (grid[x][y] === 2) {
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 2;
        }
        else {
          next[x][y] = 0;
        }
      }
      else if (grid[x][y] === 3) {
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 3;
        }
        else {
          next[x][y] = 0;
        }
      }
      else if (grid[x][y] === 4) {
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 4;
        }
        else {
          next[x][y] = 0;
        }
      }
      //dead rule
      else if (grid[x][y] === 0){
        if (neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      //war rules
      if (grid[x][y] === 1) {
        if (neighbours === 2 && grid[x][y] === 2 || neighbours === 3 && grid[x][y] === 2) {
          next[x][y] = 2;
        }
        else if (neighbours === 2 && grid[x][y] === 3 || neighbours === 3 && grid[x][y] === 3){
          next[x][y] = 3;
        }
        else if (neighbours === 2 && grid[x][y] === 4 || neighbours === 3 && grid[x][y] === 4){
          next[x][y] = 4;
        }
        else {
          next[x][y] = 1;
        }
      }
      else if (grid[x][y] === 2) {
        if (neighbours === 2 && grid[x][y] === 3 || neighbours === 3 && grid[x][y] === 3) {
          next[x][y] = 3;
        }
        else if (neighbours === 2 && grid[x][y] === 4 || neighbours === 3 && grid[x][y] === 4){
          next[x][y] = 4;
        }
        else if (neighbours === 2 && grid[x][y] === 1 || neighbours === 3 && grid[x][y] === 1){
          next[x][y] = 1;
        }
        else {
          next[x][y] = 2;
        }
      }
      else if (grid[x][y] === 3) {
        if (neighbours === 2 && grid[x][y] === 4 || neighbours === 3 && grid[x][y] === 4) {
          next[x][y] = 4;
        }
        else if (neighbours === 2 && grid[x][y] === 1 || neighbours === 3 && grid[x][y] === 1){
          next[x][y] = 1;
        }
        else if (neighbours === 2 && grid[x][y] === 2 || neighbours === 3 && grid[x][y] === 2){
          next[x][y] = 2;
        }
        else {
          next[x][y] = 3;
        }
      }
      else if (grid[x][y] === 4) {
        if (neighbours === 2 && grid[x][y] === 1 || neighbours === 3 && grid[x][y] === 1) {
          next[x][y] = 1;
        }
        else if (neighbours === 2 && grid[x][y] === 2 || neighbours === 3 && grid[x][y] === 2){
          next[x][y] = 2;
        }
        else if (neighbours === 2 && grid[x][y] === 3 || neighbours === 3 && grid[x][y] === 3){
          next[x][y] = 3;
        }
        else {
          next[x][y] = 4;
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

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else if (random(100)>75) {
        randomGrid[x].push(1);
      }
      else if (random(100)<25) {
        randomGrid[x].push(2);
      }
      else if (random(100)<15) {
        randomGrid[x].push(3);
      }
      else if (random(100)>80) {
        randomGrid[x].push(4);
      }
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
  else if (key === "r" || key === "R") {
   grid = createEmpty2dArray(cols, rows);
  }
  else if (key === " ") {
    nextTurn();
  }
  else if (key === "a" || key === "A") {
    autoPlay = !autoPlay;
  }
}
