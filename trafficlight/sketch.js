let state;
let lightDuration;
let red, yellow, green;


function setup() {
  createCanvas(600, 600);
  state = 3;
  red = 10000;
  green = 10000;
  yellow = 5000;
  lightDuration = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  correctLight();
  checkLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

}
function checkLight() {
  if (state === 1) {
    if (millis()> lightDuration + green){
      state = 2;
      lightDuration = millis();
    }
  }
  if (state === 2) {
    if (millis()> lightDuration + yellow){
      state = 3;
      lightDuration = millis();
    }
  }
  if (state === 3) {
    if (millis()> lightDuration + red){
      state = 1;
      lightDuration = millis();
    }
  }
}
function correctLight(){
  if (state === 1){
    drawGreenlight();
  }
  else if (state === 2){
    drawYellowLight();
  }
  else if (state === 3){
    drawRedLight();
  }
}
function drawGreenlight(){
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  fill(0, 255, 0); //green
}
function drawYellowLight(){
  ellipse(width / 2, height / 2, 50, 50); //middle
  fill(255, 255, 0); //yellow
}
function drawRedLight(){
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  fill(255, 0, 0); //red
}
