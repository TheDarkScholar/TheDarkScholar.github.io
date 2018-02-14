
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  document: addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {

}

function mousePressed() {


}

function keyPressed() {
  noStroke();
  fill(255,255,255);

  if (key === "E" || key === "e") {
    rect(random(windowWidth), random(windowHeight), 5, 5);
  }
}

function deviceShaken() {
  fill(random(255), random(255), random(255), random(255));
  textFont("Times New Roman");
  textSize(random(32, 100));
  text("Hello There", random(width), random(height));
}
