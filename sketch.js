var ballImg, backgroundImg, player1Img, player2Img;
var player1, player2;
var net;
var rigthEdge, leftEdge, topEdge;

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
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  if(keyDown("right")){
    player1.x += 7;
  }

  if(keyDown("left")){
    player1.x -= 7;
  }

  if(keyDown("d")){
    player2.x +=7
  }

  if(keyDown("a")){
    player2.x -= 7;
  }

  player1.collide(net);
  player1.collide(leftEdge);
  player2.collide(rightEdge);
  player2.collide(net);

  
}