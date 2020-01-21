let obstacles = [];
let background;
let particles = [];
let score = [];
let lazers = [];

function setup() {
  createCanvas(windowWidth, 450);
  bb8 = new bb8();
  obstacle = new Obstacle();
  background = new Background();
  lazer = new Lazer();
  let p = new Particle();
  particles.push(p);
}

function keyPressed() {
  if (keyCode === 32) {
    bb8.jump();
    console.log("jumptest");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 450);
}

function draw() {
  clear();
  background.draw();
  bb8.show();
  bb8.move();
  if (!bb8.flying) {
    let p = new Particle();
    particles.push(p);
  }
  particleCreate();
  if (random(1) < 0.008) {
    obstacles.push(new Obstacle());
  }
  for (let o of obstacles) {
    o.move();
    o.show();
    if (o.collides(bb8)) {
      console.log("COLLISION");
      score.push(o);
    }
  }
  if (random(1) < 0.008) {
    lazers.push(new Lazer());
  }
  for (let l of lazers) {
    l.move();
    l.show();
    if (l.collides(bb8)) {
      console.log("Lazer");
    }
  }
}

function particleCreate() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}
