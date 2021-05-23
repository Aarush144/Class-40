var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var condatabase;

var form, player, game;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image;
var track;
var GroundImage;

function preload(){

track = loadImage("../images/track.jpg")
car1Image = loadImage("../images/car1.png");
car2Image = loadImage("../images/car2.png");
car3Image = loadImage("../images/car3.png");
car4Image = loadImage("../images/car4.png");
GroundImage = loadImage("../images/ground.png");


}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
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

  if (gameState === 2){
    game.end();

   
    
  }

}

