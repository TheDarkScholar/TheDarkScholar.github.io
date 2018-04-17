let ballArray = [];
let ourTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballArray.push(new Bubble(windowWidth/2,windowHeight-5));
  ourTimer = new Timer(2000);
}

function draw() {
  background(255);
  for (let i=0;i<ballArray.length;i++){
    ballArray[i].display();
    ballArray[i].jiggle();
  }
  if (ourTimer.isDone()) {
    ballArray.push(new Bubble(windowWidth/random(10),windowHeight-5));
    ourTimer.reset(2000);
  }
}

function mousePressed(){
  ballArray.push(new Bubble(mouseX,mouseY));
}
class Bubble {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 50;
  }
  display(){
    fill(0);
    ellipse(this.x,this.y,this.radius,this.radius);
  }
  jiggle(){
    this.x += random(-0.75,0.75);
    this.y -= 0.5;
  }
  goTo(x,y){
    this.x = x;
    this.y = y;
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.isFinished = false;
  }
  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.isFinished = false;
  }
  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}
