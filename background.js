class Background {
  constructor() {
    this.images = [
      {
        src: loadImage("./images/BG001.png"),
        x: 0,
        speed: 0
      },
      {
        src: loadImage("./images/BG002.png"),
        x: 0,
        speed: 1
      },
      {
        src: loadImage("./images/BG003.png"),
        x: 0,
        speed: 2
      },
      {
        src: loadImage("./images/BG004.png"),
        x: 0,
        speed: 3
      },
      // {
      //   src: loadImage("./images/BG005.png"),
      //   x: 0,
      //   speed: 0.5
      // },
      {
        src: loadImage("./images/BG006.png"),
        x: 0,
        speed: 4
      },
      {
        src: loadImage("./images/BG007.png"),
        x: 0,
        speed: 8
      }
    ];
  }

  move(img) {
    image(img.src, img.x, 0, width, 450);
    image(img.src, img.x + width, 0, width, 450);

    img.x -= img.speed * levelSpeed;
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  draw() {
    // const c = color(174, 222, 203);
    // background(c);

    for (let i = 0; i < this.images.length; i++) {
      this.move(this.images[i]);
    }
  }
}
