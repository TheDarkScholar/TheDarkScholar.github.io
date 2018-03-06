
let nebula;
// shapes of nebula
let nebula1 ={
  area: width/ 2,
};
let nebula2 ={

};
let nebula3 ={

};
// types of nebula by color: hydrogen (red), helium (green), oxygen (blue), mixed (brownish)
let hydrogen;
let helium;
let oxygen;
let mixed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let nebula = hydrogen;
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
  // if (key === "N" || key === "n") {
  //   for (let i = 0; i < 500; i++) {
  //     fill(random(255), random(255), random(255), random(255));
  //     ellipse(random(windowWidth), random(windowHeight), 4, 4);
  //   }
  // }
}

function nebulaType(){
  if (nebula === hydrogen){
    fill(random(255),0, 0, random(255));
    ellipse(random(windowWidth), random(windowHeight), 4, 4);
  }
  else if (nebula === helium){
    fill(0, random(255), 0, random(255));
    ellipse(random(windowWidth), random(windowHeight), 4, 4);
  }
  else if (nebula === oxygen){
    fill(0, 0, random(255), random(255));
    ellipse(random(windowWidth), random(windowHeight), 4, 4);
  }
  else if (nebula === mixed){
    fill(237, 147, 53, random(255));
    ellipse(random(windowWidth), random(windowHeight), 4, 4);
  }
}

function createNebulae(){

}

// function deviceShaken() {
//   fill(random(100, 200), random(100, 200), random(255), random(255));
//   textFont("Times New Roman");
//   textSize(random(20, 32));
//   text("SPAAAAAAAAAAAAAAAACE", random(width), random(height));
// }
