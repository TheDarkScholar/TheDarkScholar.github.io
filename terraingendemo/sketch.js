let heights = [];
let numberORectangles=1000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numberORectangles = width;
  generateInitialTerrain(numberORectangles);
}

function draw() {
  background(255);
  displayTerrain();

}

function generateInitialTerrain(numberORectangles){
  for (let i = 0; i<numberORectangles; i++){
    heights.push(random(height/2));
  }
}
function displayTerrain() {
  let rectWidth = width/numberORectangles;
  rectMode(CORNERS);
  for (let i = 0; i <numberORectangles; i ++){
    rect(i*rectWidth,height,(i+1)*rectWidth,height-heights[i]);
  }
}
