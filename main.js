let obstacles = [];

function setup() {
  createCanvas(windowWidth, 450);
  bb8 = new bb8();
  obstacle = new Obstacle();
}

function keyPressed() {
  if (keyCode === 32) {
    bb8.jump();
    console.log("jumptest");
  }
  //   if (keyCode === 40) {
  //     bb8.duck();
  //     console.log("ducktest");
  //   }
}

function windowResized() {
  resizeCanvas(windowWidth, 450);
}

function draw() {
  clear();
  background(220);
  if (random(1) < 0.015) {
    obstacles.push(new Obstacle());
  }
  for (let o of obstacles) {
    o.move();
    o.show();
    if (o.collides(bb8)) {
      console.log("COLLISION");
    }
  }
  bb8.show();
  bb8.move();
}
