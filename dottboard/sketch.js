function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  drawDots();
}

function drawDots() {
  let pointSpace = 50;
  for (let x = pointSpace; x < width; x += pointSpace) {
    for (let y = pointSpace; y < height; y += pointSpace) {
      fill(0,random(255), 0);
      ellipse(x, y, 4, 4);
      stroke(0,random(255), 0, 80);
      line(x,y,random(0,width),random(0,height));
    }
  }
}
