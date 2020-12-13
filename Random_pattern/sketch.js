let canvasWidth = 500;
let numOfSquares = 20;
let squareSize = canvasWidth/numOfSquares;
let startColor;
let endColor;

function setup(){
  createCanvas(canvasWidth,canvasWidth);
  colorMode(HSB,width,height,100);
  startColor = color(100,100,100);
  endColor = color(400,400,100);
  rectMode(CENTER);
  noLoop();
}

function draw(){

  background(0);

  for(let j=0; j<numOfSquares; j++){
    for(let i=0; i<numOfSquares; i++){

      let transX = i*squareSize + squareSize/2;
      let transY = j*squareSize + squareSize/2;

      push();
      translate(transX, transY);

      noFill();
      strokeWeight(3);
      stroke((i, 0, numOfSquares-j));
      // ellipse(0,0,scaleValue,scaleValue);

      let lerpedColor = lerpColor(startColor, endColor, (i+j*numOfSquares)/400);
       stroke(lerpedColor);

      let randomNum = round(random(0,1));
      if(randomNum==0){
        line(0, 0, squareSize, squareSize);
      } else {
        line(0, squareSize, squareSize, 0);
      }
      pop();
    }
  }

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
