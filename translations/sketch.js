let clocksize;
function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width>height){
    clocksize=height*0.9;
  }
  else{
    clocksize=width*0.9;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);
  push();
  //circle
  translate(width/2,height/2);
  strokeWeight(10);
  ellipse(0,0,clocksize,clocksize);
  //middle
  fill(0);
  ellipse(0,0,4,4);
  //hours
  strokeWeight(10);
  strokeCap(SQUARE);
  for(let i = 0; i<12; i++){
    line(0,clocksize/2*0.95,0,clocksize/2*0.75);
    rotate(360/12);
  }
  //minutes
  strokeWeight(4);
  strokeCap(SQUARE);
  for(let i = 0; i<60; i++){
    line(0,clocksize/2*0.95,0,clocksize/2*0.80);
    rotate(360/60);
  }

  pop();

}
