

var boyImg, girlImg, UFO;
var galaxy, spaceGoo, coin, spaceTrack;

var player, game, form, boy, girl;
var playerCount, gameState ;
var database, allPlayers;
var humans = []
var spaceGroup, obstacles, coinGroup, oxygenGroup;
var life, oxygen;
var explosion, spaceExplosion;

function preload() {
  boyImg = loadImage("assets/boy.png");
  girlImg = loadImage("assets/girl.png");
  bgImage = loadImage("assets/galaxy.jpg");
  UFO = loadImage("assets/alien.png");
  spaceGoo = loadImage("assets/spaceGoo.png");
  spacePortal = loadImage("assets/spacePortal.png");
  coin = loadImage("assets/coin.png");
  spaceTrack = loadImage("assets/spaceTrack.png");
  life = loadImage("assets/life.png");
  oxygen = loadImage("assets/oxygen.png");
  explosion = loadImage("assets/explosion.png")
}

function setup() {
  createCanvas(1300,620);
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start();
  
}


function draw() 
{
  background(bgImage);
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    game.play()
  }
  
  
}

