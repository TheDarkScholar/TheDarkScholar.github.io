let ourWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ourWalker = new Walker(width / 2, height / 2);
}

function draw() {
  ourWalker.move();
  ourWalker.display();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.x -= 5;
    }
    else if (choice < 50) {
      this.x += 5;
    }
    else if (choice < 75) {
      this.y += 5;
    }
    else {
      this.y -= 5;
    }
  }
  display() {
    this.color = color(random(255), random(255), random(255));
    stroke(this.color);
    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
