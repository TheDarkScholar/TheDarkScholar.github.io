//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (second(0,29)){
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill(255,0,0);//red
  }
  if (second(30,59)){
    ellipse(width/2, height/2, 50, 50); //middle
    fill(255,255,0);//yellow
  }
  if (second(60,89)){
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
    fill(0,255,0);//green
  }
}
