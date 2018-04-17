let ourTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ourTimer = new Timer(3000);
}

function draw() {
  if (ourTimer.isDone()) {
    ellipse(random(width), random(height), random(25, 100), random(25, 100));
    ourTimer.reset(1000);
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
