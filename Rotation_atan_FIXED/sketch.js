let canvasWidth = 500;
let numOfSquares = 10;
let sizeOfSquare = canvasWidth/numOfSquares;

let startColor;
let endColor;

function setup(){
  createCanvas(canvasWidth,canvasWidth);
  colorMode(HSB,width,height,100);
  rectMode(CENTER);
  startColor = color(200,10,0);
  endColor = color(300,20,0);
}

function draw(){

  background(255,255,70);

  let transValueX = width/2;
  let transValueY = height/2;

  for(let j=0; j<numOfSquares; j++){
    for(let i=0; i<numOfSquares; i++){
      push();
      translate(i*sizeOfSquare + sizeOfSquare/2, j*sizeOfSquare + sizeOfSquare/2);

      let rotateValue = atan2(mouseY - j*sizeOfSquare, mouseX - i*sizeOfSquare);
      rotate(rotateValue);

      let lerpedColor = lerpColor(startColor, endColor, (i+j*numOfSquares)/400);
      stroke(lerpedColor);

      rect(0,0,sizeOfSquare/2,sizeOfSquare/2);
      pop();
    }
  }

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
