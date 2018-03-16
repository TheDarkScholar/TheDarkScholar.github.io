let nebula;
//changes the type of nebula(colour)
let state;
// shapes of nebula
let nebula1 = {
  area: random(windowWidth / 2),
  area2: random(windowHeight / 2)
};
let nebula2 = {
  area: width / 4,
  area2: height / 4
};
let nebula3 = {
  area: width / 6,
  area2: height / 6
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  let state = 1;
  let nebula = state;

}

function draw() {

}

function mousePressed() {
  if (mouseButton === LEFT) {
    background(0);
  }
}

function createNebulae() {
  if (nebula === 1) {
    fill(random(255), 0, 0, random(255));
    ellipse(nebula1.area, nebula1.area2, 3, 3);
    nebula = random(1, 4);
    return nebula;
  }
  else if (nebula === 2) {
    fill(0, random(255), 0, random(255));
    ellipse(random(windowWidth), random(windowHeight), 3, 3);
    nebula = random(1, 4);
    return nebula;
  }
  else if (nebula === 3) {
    fill(0, 0, random(255), random(255));
    ellipse(random(windowWidth), random(windowHeight), 3, 3);
    nebula = random(1, 4);
    return nebula;
  }
  else if (nebula === 4) {
    fill(237, 147, 53, random(255));
    ellipse(random(windowWidth), random(windowHeight), 3, 3);
    nebula = random(1, 4);
    return nebula;
  }
}

function keyPressed() {
  noStroke();
  if (key === "E" || key === "e") {
    for (let i = 0; i < 1500; i++) {
      fill(255, 255, 255, random(255));
      ellipse(random(windowWidth), random(windowHeight), 3, 3);
    }
  }
  if (key === "N" || key === "n") {
    for (let i = 0; i < 500; i++) {
      nebula = 1;
      createNebulae();
    }
  }
}

// function deviceShaken() {
//   fill(random(100, 200), random(100, 200), random(255), random(255));
//   textFont("Times New Roman");
//   textSize(random(20, 32));
//   text("SPAAAAAAAAAAAAAAAACE", random(width), random(height));
// }
