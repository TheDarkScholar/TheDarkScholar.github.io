let theBalls=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  moveBalls();
  displayBalls();
}

function moveBalls(){
  for (let i=0; i <theBalls.length;i++){
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    if (theBalls[i].x < 0){
      theBalls[i].x = width;
    }
    if (theBalls[i].x > width){
      theBalls[i].x = 0;
    }

    if (theBalls[i].y < 0){
      theBalls[i].y = height;
    }
    if (theBalls[i].y > height){
      theBalls[i].y = 0;
    }
  }
}

function displayBalls(){
  for (let i=0; i<theBalls.length; i++){
    fill(theBalls.colour);
    noStroke();
    ellipse(theBalls[i].x,theBalls[i].y,theBalls.size,theBalls.size);
  }
}

function mouseClicked(){
  let aBall={
    x: mouseX,
    y: mouseY,
    size: random(10,100),
    colour: color(random(255),random(255),random(255),random(255)),
    dx: random(-5,5),
    dy: random(-5,5),
  };
  theBalls.push(aBall);
}
