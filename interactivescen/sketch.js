function setup() {
  createCanvas(windowWidth, windowHeight);
  document: addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {

}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50, 150), random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(random(255), random(255), random(255), random(255));
  }
}

function keyPressed() {
  if (key === "w" || key === "W") {
    background(255);
  }
  else if (key === "b" || key === "B") {
    background(0);
  }
}

function deviceShaken() {
  fill(random(255), random(255), random(255), random(255));
  textFont("Times New Roman");
  textSize(random(32, 100));
  text("Hello There", random(width), random(height));
}
