function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  document: addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {

}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255));
  if (mouseButton === RIGHT || mouseButton === LEFT) {
    ellipse(random(255), random(255), 1, 1);
  }
}

function keyPressed() {

}

function deviceShaken() {
  fill(random(255), random(255), random(255), random(255));
  textFont("Times New Roman");
  textSize(random(32, 100));
  text("Hello There", random(width), random(height));
}
