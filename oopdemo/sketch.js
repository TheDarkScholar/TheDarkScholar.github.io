let ballArray = [];
//
// let myBall;
// let anotherBall;
// let thirdBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballArray.push(new Ball(300,400));
  // myBall = new Ball(300,400);
  // anotherBall = new Ball(100,200);
  // thirdBall = new Ball(100,300);

}

function draw() {
  background(255);
  for (let i=0;i<ballArray.length;i++){
    ballArray[i].display();
    ballArray[i].jiggle();
  }

  // myBall.display();
  // myBall.jiggle();
  // anotherBall.display();
  // anotherBall.jiggle();
  // thirdBall.display();
  // thirdBall.jiggle();
}
function mousePressed(){
  // thirdBall.goTo(mouseX,mouseY);
  ballArray.push(new Ball(mouseX,mouseY));
}
class Ball {
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
    this.x += random(-3,3);
    this.y += random(-3,3);
    this.radius += random(-5,5);
  }
  goTo(x,y){
    this.x = x;
    this.y = y;
  }
}
