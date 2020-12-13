let canvasWidth = 600;
let numOfSquares = 20;
let gridWidth = 50;
let squareSize = canvasWidth/numOfSquares;
let startColor1;
let endColor1;
let startColor2;
let endColor2;
let strokeMinWidth = 2;
let strokeMaxWidth = 8;

function setup(){
  createCanvas(canvasWidth,canvasWidth);
  colorMode(HSB,width,height,100);
  background(30,400,30);
  startColor1 = color(200,200,100);
  endColor1 = color(500,500,100);
  startColor2 = color(400,400,300);
  endColor2 = color(700,700,300);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw(){

  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {

      //To show background grid
      // stroke(0);
      // rect(i * gridWidth, j * gridWidth, gridWidth, gridWidth);

      let lerpedColor1 = lerpColor(startColor1, endColor1, (i+j*numOfSquares)/canvasWidth);
      let lerpedColor2 = lerpColor(startColor2, endColor2, (i+j*numOfSquares)/canvasWidth);

      //Draw zigzag
      strokeWeight(strokeMinWidth);
      strokeCap(PROJECT);
      stroke(lerpedColor1);

      if (i % 2 == 0 && j % 2 == 0) {
        line(i * gridWidth, j * gridWidth, i * gridWidth + gridWidth, j * gridWidth + gridWidth);
      }
      if (i % 2 == 1 && j % 2 == 1) {
        line(i * gridWidth + gridWidth, j * gridWidth, i * gridWidth, j * gridWidth + gridWidth);
      }

      strokeWeight(strokeMaxWidth);
      strokeCap(SQUARE);
      stroke(lerpedColor2);

      if (i % 2 == 1 && j % 2 == 0) {
        line(i * gridWidth, j * gridWidth, i * gridWidth + gridWidth, j * gridWidth + gridWidth);
      }
      if (i % 2 == 0 && j % 2 == 1) {
        line(i * gridWidth + gridWidth, j * gridWidth, i * gridWidth, j * gridWidth + gridWidth);
      }
    }
  }
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
