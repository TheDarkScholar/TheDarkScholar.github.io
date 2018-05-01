let player;
let characterXPos = 100;
let characterYPos = 100;
let health = 20;
let healthPotion;


function preload() {
  player = loadImage("images/armor-move-4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  healthPotion = new Potion(random(400), random(400));
}

function draw() {
  background(255);
  image(player, characterXPos, characterYPos);
  playerHealth();
  stroke(0);
  fill(255,255,255,0);
  rect(0,0,300,300);
  healthPotion.display();
}

class Potion {
  constructor(x, y) {
    this.potionradius = 20;
    this.potiontop = y;
    this.potionbot = this.potiontop + this.potionradius;
    this.potionlft = x;
    this.potionrgt = this.lft + this.potionradius;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.potionlft, this.potiontop, this.potionradius, this.potionradius);
  }
}

function keyPressed() {
  if (key === "w" || key === "W") {
    characterYPos -= 20;
  }
  else if (key === "a" || key === "A") {
    characterXPos -= 20;
  }
  else if (key === "s" || key === "S") {
    characterYPos += 20;
  }
  else if (key === "d" || key === "D") {
    characterXPos += 20;
  }
  else if (key === "e" || key === "E") {
    let xcoord = floor(this.potionlft/this.potionradius);
    let ycoord = floor(this.potiontop/this.potionradius);
    if (characterXPos === xcoord && characterYPos === ycoord){
      if (this.r > this.g && this.r > this.b) {
        health = health + 5;
      }
      else if (this.g > this.r && this.g > this.b) {
        health = health -= 5;
      }
      else if (this.b > this.g && this.b > this.r) {
        health = health + 10;
      }
    }
  }
}

function playerHealth() {
  if (characterXPos > 300 || characterYPos > 300) {
    health -= 0.05;
  }
  if (health < 1) {
    fill(0);
    rect(characterXPos, characterYPos, 30, 30);
  }
}

// characterXPos >= this.potionlft && characterXPos <= this.potionrgt && characterYPos >= this.potiontop && characterYPos <= this.potionbot
