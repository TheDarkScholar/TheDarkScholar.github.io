//basciinteraction
// Michael Fourie- Feb 7 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, windowWidth), random(0, windowHeight), random(50, 200), random(50, 200));
}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(50, 200), random(50, 200));
}

function deviceShaken() {
  textFont("Times New Roman");
  textSize(32);
  text("Reeeeee",random(width),random(height));
}
