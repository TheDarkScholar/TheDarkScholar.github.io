let backgroundMusic;
let shotSound;

function preload(){
  backgroundMusic = loadSound("soundassets/Orbital Colossus.mp3");
  shotSound = loadSound("soundassets/crossbow_dryshot.flac");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  backgroundMusic.setVolume(0.4);
  backgroundMusic.loop();
  shotSound.setVolume(0.9);

}

function draw() {
  // background(255);
}

function mousePressed() {
  fill(random(255),random(255),random(255),random(255));
  noStroke();
  ellipse(random(width),random(height),50,50);
  shotSound.play();
}
