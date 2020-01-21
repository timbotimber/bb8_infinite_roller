class Obstacle {
  constructor() {
    this.r = 45;
    this.x = width;
    this.y = random(200, height - this.r);
    this.width = this.r;
    this.height = this.r;
  }

  move() {
    this.x -= 10;
  }

  draw() {}

  show() {
    rect(this.x, this.y, this.r, this.r);
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
