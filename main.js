let obstacles = [];
let background;
let particles = [];
let score = [];
let scoreCounter = 50;
let hiScoreCounter = 50;
let lazers = [];
let gameStart = false;
let gameOver = false;
let screen = 0;
let timePoints = 0;
let levelSpeed = 1;

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
  if (keyCode === 13) {
    console.log("go");
  }
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
  document.querySelector("#score").innerText = scoreCounter;
  document.querySelector("#hiscore").innerText = hiScoreCounter;
  clear();
  if (scoreCounter <= 0) {
    gameOver = true;
    document.querySelector(".game-over").style.display = "block";
  }
  background.draw();
  bb8.show();
  bb8.move();
  if (!bb8.flying && scoreCounter >= 0) {
    let p = new Particle();
    particles.push(p);
  }
  particleCreate();

  if (gameStart === true && random(1) < 0.008) {
    obstacles.push(new Obstacle());
  }
  for (let o of obstacles) {
    o.move();
    o.show();
    if (o.collides(bb8)) {
      scoreCounter += 10;
      document.querySelector("#score").innerText = scoreCounter;
      // }
    }
  }

  if (gameStart === true && random(1) < 0.01 * levelSpeed) {
    lazers.push(new Lazer());
  }
  for (let l of lazers) {
    l.move();
    l.show();
    if (l.collides(bb8)) {
      scoreCounter -= 20;
      document.querySelector("#score").innerText = scoreCounter;
      rect(0, 0, windowWidth, 450);
    }
  }

  hiScoreTally();
  speedUp();

  obstacles = obstacles.filter(
    function(obstacle) {
      if (!obstacle.collides(bb8) && obstacle.x + obstacle.width >= 0) {
        return true;
      }
    }.bind(this)
  );

  lazers = lazers.filter(
    function(lazer) {
      if (!lazer.collides(bb8) && lazer.x + lazer.width >= 0) {
        return true;
      }
    }.bind(this)
  );
}

function speedUp() {
  if (frameCount % 240 === 0) {
    timePoints += 1;
    levelSpeed += 0.05;
  }
}

function hiScoreTally() {
  if (hiScoreCounter < scoreCounter) {
    hiScoreCounter = scoreCounter;
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
