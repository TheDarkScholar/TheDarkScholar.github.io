//global variables
let x;
let y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw() {
  background(255);

  moveStickman();

  drawStickman(mouseX, mouseY);
  drawStickman(x,y);
}

function drawStickman(x,y) {
  x = constrain(x,0,width/2);

  //body and arms
  line(x, y, x, y+200);
  line(x-50, y+100, x+50, y+100);
  //head
  fill(255,255,255);
  ellipse(x, y, 100, 100);
  //hat
  fill(145, 6, 30);
  rect(x-25, y-130, 50, 50);
  rect(x-50, y-80, 100, 30);
  //legs
  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);
}

function moveStickman() {
  if (isMovingUp) {
    y = y - 10;
  }
  if (isMovingDown) {
    y = y + 10;
  }
  if (isMovingRight) {
    x = x + 10;
  }
  if (isMovingLeft) {
    x = x - 10;
  }
}

function keyPressed() {
  if(key === "w" || key === "W") {
    isMovingUp = true;
  }
  if(key === "s" || key === "S") {
    isMovingDown = true;
  }
  if(key === "d" || key === "D") {
    isMovingRight = true;
  }
  if(key === "a" || key === "A") {
    isMovingLeft = true;
  }
}
function keyReleased() {
  if(key === "w" || key === "W") {
    isMovingUp = false;
  }
  if(key === "s" || key === "S") {
    isMovingDown = false;
  }
  if(key === "d" || key === "D") {
    isMovingRight = false;
  }
  if(key === "a" || key === "A") {
    isMovingLeft = false;
  }
}
