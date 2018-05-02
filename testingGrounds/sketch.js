let player;
let characterXPos = 100;
let characterYPos = 100;
let health = 200;
let healthPotion;
let poisonPool;

function preload() {
  player = loadImage("images/armor-move-4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // healthPotion = new Potion(random(400), random(400));
  // poisonPool = new Poison(random(300), random(300));
}

function draw() {
  background(255);
  stroke(0);
  fill(255, 255, 255, 0);
  rect(0, 0, 300, 300);
  // healthPotion.display();
  // poisonPool.display();
  image(player, characterXPos, characterYPos);
  playerHealth();
}

// class Potion {
//   constructor(x, y) {
//     this.potionradius = 20;
//     this.potiontop = y;
//     this.potionbot = this.potiontop + this.potionradius;
//     this.potionlft = x;
//     this.potionrgt = this.potionlft + this.potionradius;
//     this.potionr = random(255);
//     this.potiong = 0;
//     this.potionb = random(255);
//   }
//   display() {
//     noStroke();
//     fill(this.potionr, this.potiong, this.potionb);
//     ellipse(this.potionlft, this.potiontop, this.potionradius, this.potionradius);
//   }
// }
//
// class Poison {
//   constructor(x, y) {
//     this.poisonradius = random(40, 80);
//     this.poisontop = y;
//     this.poisonbot = this.poisontop + this.poisonradius;
//     this.poisonlft = x;
//     this.poisonrgt = this.poisonlft + this.poisonradius;
//     this.poisonr = 0;
//     this.poisong = random(50, 255);
//     this.poisonb = 0;
//   }
//   display() {
//     noStroke();
//     fill(this.poisonr, this.poisong, this.poisonb);
//     ellipse(this.poisonlft, this.poisontop, this.poisonradius, this.poisonradius);
//   }
// }

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
  // else if (key === "e" || key === "E") {
  //   let xcoord = floor(this.potionlft / this.potionradius);
  //   let ycoord = floor(this.potiontop / this.potionradius);
  //   if (characterXPos === xcoord && characterYPos === ycoord) {
  //     if (this.potionr > this.potionb) {
  //       health += 5;
  //       this.potionr = 255;
  //       this.potiong = 255;
  //       this.potionb = 255;
  //     }
  //     else if (this.potionb > this.potionr) {
  //       health += 10;
  //       this.potionb = 255;
  //       this.potiong = 255;
  //       this.potionr = 255;
  //     }
  //   }
}

function playerHealth() {
  // let xcoord = floor(this.poisonlft / this.poisonradius);
  // let ycoord = floor(this.poisontop / this.poisonradius);
  if (characterXPos >= 300 || characterYPos >= 300) {
    health -= 1;
    print(health);
  }
  // else if (characterXPos === xcoord && characterYPos === ycoord) {
  //   health -= 1;
  // }
  if (health < 1) {
    fill(0);
    rect(characterXPos, characterYPos, 30, 30);
  }
}
