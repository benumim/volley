class Ball{
    constructor() {
        var options = {
            isStatic: false
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.velocityY = 5;
        this.body = Bodies.circle(x, y, r, options);
    }

    bounce() {
        if(this.body.isTouching(Player)){
            this.body.bounceOff(Player);
        }
    }

    collide() {
        if(this.body.isTouching(net)){
            this.body.collide(net);
        }
    }

    attack() {
        if(this.body.isTouching(player1) && keyDown("space")){
            this.body.velocityX += 12;
            this.body.velocityY -= 1;
        }
        if(this.body.isTouching(player2) && keyDown("space")){
            this.body.velocityX -= 12;
            this.body.velocityY -= 1;
        }
    }

    display() {
        imageMode(CENTER);
        image(ballImg, this.body.x, this.body.y, this.body.r);
    }
}