let player1, player2, player3, player4, player5, player6, player7, player8;
let characterXPos = 100;
let characterYPos = 100;

function preload() {
  player1 = loadImage("images/armor move-1.png");
  player2 = loadImage("images/armor move-2.png");
  player3 = loadImage("images/armor move-3.png");
  player4 = loadImage("images/armor move-4.png");
  player5 = loadImage("images/armor move-5.png");
  player6 = loadImage("images/armor move-6.png");
  player7 = loadImage("images/armor move-7.png");
  player8 = loadImage("images/armor move-8.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  playerSpriteAnimation();
}

function playerSpriteAnimation() {
  let playerSprite = [player1, player2, player3, player4, player5, player6, player7, player8];
  if (mouseIsPressed && mouseButton === RIGHT) {
    let clickedMouseX = mouseX;
    let clickedMouseY = mouseY;
    for (let x = characterXPos; x < clickedMouseX; x++) {
      for (let y = characterYPos; y < clickedMouseY; y++) {
        for (let i = 0; i < playerSprite.length; i++) {
          image(playerSprite[i], characterXPos, characterYPos);
          if (i > playerSprite.length) {
            i = 0;
          }
        }
        if (y === clickedMouseY) {
          let characterYPos = clickedMouseY;
        }
      }
      if (x === clickedMouseX) {
        let characterXPos = clickedMouseX;
      }
    }
  }
}
