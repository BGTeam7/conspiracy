let nodules = []
let angle = 10;
let links = []
let nodes = 30;
let c1, c2;

let word = "text";
let font;

function initNodes(p5) {
    createCanvas(1000, 500, WEBGL);
    angleMode(DEGREES);
    InstantiateNodules();
    generateLinks();
    textFont(font);
    textAlign(CENTER);
}

function drawNodes(p5) {
    gradient2();

    for (let i = 0; i < nodes; i++) {
        nodules[i].display();
        nodules[i].drift();
        nodules[i].sizeChange();
    }

    for (let i = 0; i < links.length; i++) {
        links[i].display();
    }
}

function gradient2() {
  let c1 = color(0);
  let c2 = color(42, 35, 86);
  let c3 = color(255, 111, 255);

  let mid = width / 2;

  for (let x = -mid; x < mid; x++) {
    let n;
    let newc;

    if (x < 0) {
      n = map(x, -mid, 0, 0, 1);
      newc = lerpColor(c3, c1, n);
    } else {
      n = map(x, 0, mid, 0, 1);
      newc = lerpColor(c1, c2, n);
    }

    stroke(newc);
    line(x, -height / 2, x, height / 2);
  }
}

function InstantiateNodules() {
  for (let i = 0; i < nodes; i++) {
    nodules.push(new Nodule(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(8, 20)
    ));
  }
}

function generateLinks() {
  for (let i = 0; i < nodules.length; i++) {
    links.push(new Link());
  }
}

class Nodule {
  constructor(x, y, baseSize) {
    this.x = x;
    this.y = y;
    this.baseSize = baseSize;
    this.size = baseSize;
    this.radius = random(-2.0, 2.5);
    this.direction = random(-21, 21);

    // NEW: Randomized pulsation behavior
    this.pulsationOffset = random(TWO_PI);
    this.pulsationSpeed = random(0.1, 1);
  }

  display() {
    // Fill for circle
    fill(110, 203, 246);

    // Circle outline
    stroke(110, 203, 246);
    strokeWeight(1);
    circle(this.x, this.y, this.size);

    // Text transparency based on size
    let alpha = map(this.size, 5, 25, 80, 200);
    fill(0, 0, 0, alpha);
    noStroke();
    textSize(this.size / 2);
    text(word, this.x, this.y);
  }

  drift() {
    let vx = this.radius * cos(this.direction);
    let vy = this.radius * sin(this.direction);

    this.x += vx;
    this.y += vy;

    this.direction += 0.5;
  }

  sizeChange() {
    // NEW: smooth pulsation based on individual timing
    let t = frameCount * this.pulsationSpeed + this.pulsationOffset;
    this.size = this.baseSize + sin(t) * 20; // 3 is pulsation amplitude
  }
}

class Link {
  constructor() {
    this.node1 = random(nodules);
    this.node2 = random(nodules);
  }

  display() {
    strokeWeight(2);
    stroke(110, 203, 246);
    line(this.node1.x, this.node1.y, this.node2.x, this.node2.y);
  }
}