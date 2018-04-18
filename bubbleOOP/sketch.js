let myBubble;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBubble = new Bubble(random(width), height, 25);
}

function draw() {
  background(255);
  myBubble.display();
  myBubble.move();
}

class Bubble {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 50;
    this.dy = random(-2, -1);
    this.bubbleTimer = new Timer(1000);
    this.topHasBeenTouched = false;
  }
  display(){
    if (!this.bubbleTimer.isDone()){
      fill(0);
      ellipse(this.x,this.y,this.radius,this.radius);
    }

  }
  move() {
    if (this.y > 0 + this.radius) {
      this.y += this.dy;
    }
    else {
      if (!this.topHasBeenTouched){
        this.y = 0 + this.radius;
        this.bubbleTimer.start();
      }
      else {
        this.topHasBeenTouched = true;
      }
    }
    this.x += random(-0.25, 0.25);
  }
}


class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    // this.startTime = millis();
    // this.finishTime = this.startTime + this.waitTime;
    this.isFinished = false;
  }

  start(){
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
