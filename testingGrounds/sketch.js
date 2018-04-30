let player;
let characterXPos = 100;
let characterYPos = 100;

function preload() {
  player = loadImage("images/armor-move-2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  mouseClicked();
}

function mouseClicked() {
  if (mouseClicked && mouseButton === LEFT) {
    let clickedMouseX = mouseX;
    let clickedMouseY = mouseY;
    for (let x = characterXPos; x < clickedMouseX; x++) {
      for (let y = characterYPos; y < clickedMouseY; y++) {
        y += 10;
        if (y === clickedMouseY) {
          let characterYPos = clickedMouseY;
        }
      }
      x += 10;
      if (x === clickedMouseX) {
        let characterXPos = clickedMouseX;
      }
    }
    image(player, characterXPos, characterYPos);
  }
}
