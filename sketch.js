var ballImg, backgroundImg, player1Img, player2Img;
var player1, player2;
var ball;
var net;
var rigthEdge, leftEdge, topEdge;
var p1ground, p2ground;


function preload() {
  ballImg = loadImage("./assets/ball.png");
  backgroundImg = loadImage("./assets/court.png");
  player1Img = loadImage("./assets/player1.png");
  player2Img = loadImage("./assets/player2.png");
}

function setup() {
  createCanvas(1340,600);
  player1 = createSprite(250, 420, 130, 210);
  player1.addImage(player1Img);
  player2 = createSprite(1030, 420, 130, 210);
  player2.addImage(player2Img);
  net = createSprite(625, 430, 40, 350);
  net.visible = false;
  rightEdge = createSprite(1335, 350, 20, 600);
  rightEdge.visible = false;
  leftEdge = createSprite(0, 350, 20 , 600);
  leftEdge.visible = false;
  p1ground = createSprite(300, 500, 600, 10);
  p2ground = createSprite(1000, 500, 700, 10);
  p1ground.visible = false;
  p2ground.visible = false;

  var options = {
    isStatic: false
  }

  player1 = new Player(250, 420, 130, 210, options);
  player2 = new Player(1030, 420, 130, 210, options);
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  player1.display(player1Img, player1.x, player1.y, player1.w, player1.h);
  player2.display(player2Img, player2.x, player2.y, player2.w, player2.h);

  player1.collide(net);
  player1.collide(leftEdge);
  player2.collide(rightEdge);
  player2.collide(net);

  
}