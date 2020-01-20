function setup() {
  createCanvas(windowWidth, 450);
  bb8 = new bb8();
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
  background(220);
  bb8.show();
  bb8.move();
}
