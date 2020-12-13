let canvasWidth = 1754;
let canvasHeight = 2481;
let numOfSquares = 20;
let gridWidth = 150;
let gridHeight = 200;
let squareSize = canvasHeight/canvasWidth;
let startColor1;
let endColor1;
let startColor2;
let endColor2;
let strokeMinWidth = 2;
let strokeMaxWidth = 18;

function setup(){
  createCanvas(canvasWidth,canvasHeight);
  colorMode(HSB, canvasWidth, canvasHeight, 100);
  background(30,600,30);
  startColor1 = color(100,200,100);
  endColor1 = color(600,700,100);
  startColor2 = color(400,500,300);
  endColor2 = color(900,1000,300);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw(){

  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {

      //To show background grid
      // stroke(0);
      // rect(i * gridWidth, j * gridWidth, gridWidth, gridWidth);

      let lerpedColor1 = lerpColor(startColor1, endColor1, (i+j*numOfSquares)/gridWidth);
      let lerpedColor2 = lerpColor(startColor2, endColor2, (i+j*numOfSquares)/gridWidth);

      //Draw zigzag
      strokeWeight(strokeMinWidth);
      strokeCap(PROJECT);
      stroke(lerpedColor1);

      if (i % 2 == 0 && j % 2 == 0) {
        line(i * gridWidth, j * gridWidth, i * gridWidth + gridWidth, j * gridWidth + gridWidth);
        //line(i * gridHeight, j * gridHeight, i * gridHeight + gridHeight, j * gridHeight + gridHeight);
      }
      if (i % 2 == 1 && j % 2 == 1) {
        line(i * gridWidth + gridWidth, j * gridWidth, i * gridWidth, j * gridWidth + gridWidth);
        //line(i * gridHeight + gridHeight, j * gridHeight, i * gridHeight, j * gridHeight + gridHeight);
      }

      strokeWeight(strokeMaxWidth);
      strokeCap(SQUARE);
      stroke(lerpedColor2);

      if (i % 2 == 1 && j % 2 == 0) {
        line(i * gridWidth, j * gridWidth, i * gridWidth + gridWidth, j * gridWidth + gridWidth);
        //line(i * gridHeight, j * gridHeight, i * gridHeight + gridHeight, j * gridHeight + gridHeight);
      }
      if (i % 2 == 0 && j % 2 == 1) {
        line(i * gridWidth + gridWidth, j * gridWidth, i * gridWidth, j * gridWidth + gridWidth);
        //line(i * gridHeight + gridHeight, j * gridHeight, i * gridHeight, j * gridHeight + gridHeight);
      }
    }
  }
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
