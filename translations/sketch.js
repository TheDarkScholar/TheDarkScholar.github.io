function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  push();
  angleMode(DEGREES);

  translate(width/2,height/2);
  ellipse(0,0,400,400);
  rotate(frameCount*0.25);
  fill(random(255),random(255),random(255));
  rectMode(CENTER);
  rect(0,0,300,50);
  pop();

  rect(100,100,200,200);

}
