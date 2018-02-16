function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  document: addEventListener("contextmenu", event => event.preventDefault());

}

function draw() {

}

function mousePressed() {
  if (mouseButton === RIGHT) {
    background(0);
  }
}

function keyPressed() {
  noStroke();
  fill(255, 255, 255, random(255));
  if (key === "E" || key === "e") {
    for (let i = 0; i < 1500; i++) {
      ellipse(random(windowWidth), random(windowHeight), 3, 3);
    }
  }
  if (key === "N" || key === "n") {
    for (var i = 0; i < 500; i++) {
      fill(random(255), random(255), random(255), random(255));
      ellipse(random(windowWidth), random(windowHeight), 4, 4);
    }
  }
}


function deviceShaken() {
  fill(random(100, 200), random(100, 200), random(255), random(255));
  textFont("Times New Roman");
  textSize(random(20, 32));
  text("SPAAAAAAAAAAAAAAAACE", random(width), random(height));
}
