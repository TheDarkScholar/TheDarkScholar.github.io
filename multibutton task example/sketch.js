function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    let x = random(width);
    let y = random(height);
    triangle(x, y, x + 50, y + 50, x + 50, y);
  }

  if (keyIsPressed && (key === "x" || key === "z")) {
    ellipse(random(windowWidth), random(windowHeight), 50, 50);
  }
}
