var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var kart1, kart2, kart3, kart4, track1;
var groundImg;

function preload(){
kart1 = loadImage("myCar1.PNG");
kart2 = loadImage("myCar2.PNG");
kart3 = loadImage("myCar3.PNG");
kart4 = loadImage("myCar4.PNG");
track1 = loadImage("track.jpg");
groundImg = loadImage("ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.end();
  }
}
