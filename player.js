class Player{
constructor(x, y , w, h, options) {
    var options = {
        isStatic: false, 
    }
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.image = image;
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
}

jump() {
    if(keyDown("UP_ARROW")){
        this.body.velocityY -= 7;
        this.body.velocityY = this.body.velocityY + 0.8;
    }
}

move() {
    if(keyDown("right")){
        this.body.x += 7;
      }
    
      if(keyDown("left")){
        this.body.x -= 7;
      }
}

display() {
    imageMode(CENTER);
    image(this.image, this.body.x, this.body.y, this.body.w, this.body.h);
}
}