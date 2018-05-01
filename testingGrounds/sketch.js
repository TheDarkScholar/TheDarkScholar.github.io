let player;
let characterXPos = 100;
let characterYPos = 100;
let health = 20;
let healthPotion;
let r = 255;
let g = 255;
let b = 255;

function preload() {
  player = loadImage("images/armor-move-4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  image(player, characterXPos, characterYPos);
  playerHealth();
  // mousePressed();
}

// function mousePressed() {
//   if (mouseIsPressed && mouseButton === LEFT) {
//     let clickedMouseX = mouseX;
//     let clickedMouseY = mouseY;
//     for (let x = characterXPos; x < clickedMouseX; x++) {
//       for (let y = characterYPos; y < clickedMouseY; y++) {
//         if (y === clickedMouseY) {
//           let characterYPos = clickedMouseY;
//         }
//       }
//       if (x === clickedMouseX) {
//         let characterXPos = clickedMouseX;
//       }
//     }
//   }
// }

function keyPressed(){
  if (key === "w" || key === "W"){
    characterYPos -= 10;
  }
  else if (key === "a" || key === "A"){
    characterXPos -= 10;
  }
  else if (key === "s" || key === "S"){
    characterYPos += 10;
  }
  else if (key === "d" || key === "D"){
    characterXPos += 10;
  }
}

function playerHealth(){
  if (characterXPos > 300 || characterYPos > 300){
    health -= 0.5;
  }
  if (health < 1){
    rect(characterXPos,characterYPos,30,30);
    fill(0);
  }
  else if (characterXPos ){
    let d;
  }
}

class HealthPotion{
  constructor(){
    this.potionradius = 10;
    this.potioncolor = (random(r),random(g),random(b));
    this.potionx= random(windowWidth);
    this.potiony = random(windowHeight);
    this.potiontop;
    this.potionbot;
    this.potionlft;
    this.potionrgt;
  }
  display(){
    fill(this.potioncolor);
    ellipse(this.potionx,this.potiony,this.potionradius,this.potionradius);
  }
}
