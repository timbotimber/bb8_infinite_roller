class Particle {
  constructor() {
    this.x = 130;
    this.y = height;
    this.vx = random(5, 1);
    this.vy = random(-3, -1);
    this.alpha = 225;
  }

  show() {
    noStroke();
    fill(0, this.alpha);
    ellipse(this.x, this.y, 8);
  }

  update() {
    this.y += this.vy;
    this.x -= this.vx;
    this.alpha -= 9;
  }

  finished() {
    return this.alpha < 0;
  }
}
