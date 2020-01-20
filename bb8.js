class bb8 {
  constructor() {
    this.circle = 50;
    this.x = 100;
    this.y = height - 50;
    this.velocityY = 0.5;
    this.gravity = 1.2;
  }

  jump() {
    if (this.y == height - this.circle) {
      this.velocityY = -15;
      console.log("jumptest");
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.circle);
  }

  show() {
    let body = circle(this.x, this.y, this.circle * 2);

    let head = circle(this.x, this.y / 1.17, this.circle);
  }
}
