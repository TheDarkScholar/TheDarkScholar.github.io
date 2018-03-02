let boxSize;
let isBlack;

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowWidth,windowWidth);
  }
  else {
    createCanvas(windowHeight,windowHeight);
  }
  boxSize = width / 8;
  isBlack = false;
}

function draw() {
  background(255);
  drawBoard();
}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isBlack){
        fill(0);
      }
      else {
        fill(255);
      }
      rect(boxSize * j, boxSize * i, boxSize, boxSize);
      isBlack = !isBlack;
    }
    isBlack = !isBlack;
  }
}
