let angle = 0;
let w = 20;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(100);
  // translate(width/2, height/2);
  //

  ortho();
  directionalLight(255, 255, 255, 0, -1, 0);
  translate(0, 50, -50);
  rotateX(-QUARTER_PI);

  let offset = 0;
  for(let z = 0; z < height; z+=w) {
    for(let x = 0; x < width; x+=w) {
      push();
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 100);
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w - 2, h, w - 2);
      pop();
    }
    offset += 0.1;
  }

  angle += 0.05;
}
