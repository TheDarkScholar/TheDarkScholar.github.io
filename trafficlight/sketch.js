let state;
let lightDuration;
let red, yellow, green;


function setup() {
  createCanvas(600, 600);
  state = 3;
  red = 3500;
  green = 3500;
  yellow = 2000;
  lightDuration = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkLight();
  correctLight();
}


function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  fill(255);
  //lights
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom

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
  fill(0, 255, 0); //green
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}
function drawYellowLight(){
  fill(255, 255, 0); //yellow
  ellipse(width / 2, height / 2, 50, 50); //middle
}
function drawRedLight(){
  fill(255, 0, 0); //red
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
}
