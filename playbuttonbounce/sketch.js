let state;
let x, y, radius;
let dx, dy;
let dvd, dvdColor;

function preload() {
  dvd = loadImage("images/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  dvdColor = color(0);
  state = 1;
}

function draw() {
  background(255);
  if (state === 1) {
    displayStartScreen();
  }
  if (state === 2) {
    moveThing();
    displayThing();
  }
}

function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  rect(leftSide, topSide, buttonWidth, buttonHeight);

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= bottomSide && mouseY <= topSide) {
    fill(255, 0, 0);
    if (mouseIsPressed) {
      state = 2;
    }
  }
}

function moveThing() {
  x += dx;
  y += dy;

  if (y + dvd.height / 2 >= height || y - dvd.height / 2 <= 0) {
    dy = dy * -1;
    dvdColor = color(random(255), random(255));
  }

  if (x + dvd.width / 2 >= width || x - dvd.width / 2 <= 0) {
    dx = dx * -1;
    dvdColor = color(random(255), random(255));
  }
}

function displayThing() {
  fill(0);
  imageMode(CENTER);
  tint(dvdColor);
  image(dvd, x, y);
}
