class Lazer {
  constructor() {
    this.r = 20;
    this.x = width;
    this.y = random(300, height - 10 - this.r);
    this.width = this.r;
    this.height = this.r;
    this.lazer = loadImage("./images/green_lazer.png");
  }

  move() {
    this.x -= 20;
  }

  draw() {}

  show() {
    image(this.lazer, this.x, this.y);
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
