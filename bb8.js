class bb8 {
  constructor() {
    this.side = 100;
    this.x = 100;
    this.y = height - 50;
    this.velocityY = 0.7;
    this.gravity = 1.5;
    this.headY = height - this.side;
    this.body = loadImage("./images/body.png");
    this.head = loadImage("./images/head.png");
    this.flying = false;

    this.width = this.side;
  }

  jump() {
    if (this.y == height - this.side) {
      this.velocityY = -25;
      this.headY = 250;
      this.flying = true;
    }
  }

  move() {
    if (keyIsDown(40) && this.headY + this.height === height) {
      // down arrow key and bb8 on the ground
      this.headY = this.headY + (height - this.side - this.headY) * 0.1;
    } else {
      // key is released (or in air)
      this.y += this.velocityY;
      this.headY += this.velocityY - 0.1;
      this.velocityY += this.gravity;

      if (this.headY + 0.5 * this.side >= height - this.side) {
        this.headY = height - this.side * 1.5;
      }
    }

    if (this.y >= height - this.side) {
      this.y = height - this.side;
      this.flying = false;
    }
  }

  show() {
    this.height = this.side + (this.y - this.headY);

    // push();
    // fill("red");
    // rect(this.x, this.headY, this.width, this.height);
    // pop();

    push();
    translate(
      this.x + (random(1) < 0.9) + (1 / 2) * this.width,
      this.y + (random(1) < 0.9) + (1 / 2) * this.side
    );
    rotate((PI / 20) * frameCount);
    imageMode(CENTER);
    image(this.body, 0, 0);

    pop();

    image(
      this.head,

      this.x + (random(1) < 0.9),
      this.headY + (random(1) < 0.9)
    );
  }
}
