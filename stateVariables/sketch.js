let nebularea;
let nebula;
// shapes of nebula
let nebula1 ={
  area: random(width)/2,
  area2: random(height)/ 2
};
let nebula2 ={
  area: random(width)/4,
  area2: random(height)/4
};
let nebula3 ={
  area: random(width)/6,
  area2: random(height)/6
};
//changes the type of nebula(colour)
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let state = 1;
  let nebula = state;
  let nebularea = [nebula1,nebula2,nebula3];
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
    for (let i = 0; i < 500; i++) {
      createNebulae();
    }
  }
}

function createNebulae(){
  if (nebula === 1){
    fill(random(255),0, 0, random(255));
    ellipse(random(nebularea[0],nebularea[2]), random(nebularea[0],nebularea[2]), 4, 4);
    state = random(1,4);
  }
  else if (nebula === 2){
    fill(0, random(255), 0, random(255));
    ellipse(random(nebularea[0],nebularea[2]), random(nebularea[0],nebularea[2]), 4, 4);
    state = random(1,4);
  }
  else if (nebula === 3){
    fill(0, 0, random(255), random(255));
    ellipse(random(nebularea[0],nebularea[2]), random(nebularea[0],nebularea[2]), 4, 4);
    state = random(1,4);
  }
  else if (nebula === 4){
    fill(237, 147, 53, random(255));
    ellipse(random(nebularea[0],nebularea[2]), random(nebularea[0],nebularea[2]), 4, 4);
    state = random(1,4);
  }
}

// function deviceShaken() {
//   fill(random(100, 200), random(100, 200), random(255), random(255));
//   textFont("Times New Roman");
//   textSize(random(20, 32));
//   text("SPAAAAAAAAAAAAAAAACE", random(width), random(height));
// }
