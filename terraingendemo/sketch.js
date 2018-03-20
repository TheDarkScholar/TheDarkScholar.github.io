let heights = [];
let numberORectangles = 5000000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numberORectangles = width;
  generateInitialTerrain(numberORectangles);

}

function draw() {
  background(255);
  displayTerrain();
  plantFlag();
}

function generateInitialTerrain(numberORectangles) {
  let time = 0;
  let ct = 0.01;

  for (let i = 0; i < numberORectangles; i++) {
    let currentHeight= noise(time)*500;
    heights.push(currentHeight);
    time +=ct;
  }
}

function displayTerrain() {
  let rectWidth = width / numberORectangles;
  rectMode(CORNERS);
  stroke(0);
  for (let i = 0; i < numberORectangles; i++) {
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}

function plantFlag(){
  let tallest = 0;
  let heighestX;
  let rectWidth = width / numberORectangles;
  for (let i = 0; i < heights.length; i++){
    if (heights[i] > tallest){
      tallest = heights[i];
      heighestX = i*rectWidth;
    }
  }
  let heighestY = height - tallest;
  stroke(255,0,0);
  line(0,heighestY,width,heighestY);
  ellipse(heighestX,heighestY,10,10);
}
