class Obstacle {
  constructor() {
    this.r = 45;
    this.x = width;
    this.y = random(0, height - this.r);
    this.width = this.r;
    this.height = this.r;
    this.item = loadImage("./images/collect.png");
    this.speed = 10;
  }

  move() {
    this.x -= this.speed * levelSpeed;
  }

  draw() {}

  show() {
    image(this.item, this.x, this.y, 50, 50);
    fill(255);
  }

  collides(bb8) {
    if (this.x > bb8.x + bb8.width || bb8.x > this.x + this.width) {
      return false;
    }
    if (bb8.headY > this.y + this.height || this.y > bb8.headY + bb8.height) {
      return false;
    }
    return true;
  }
}

// function time increase if (frameCount % 60 === 0) {
//   this.x += 5;
