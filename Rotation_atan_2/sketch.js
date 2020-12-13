let canvasWidth = 500;
let numOfSquares = 20;
let squareSize = canvasWidth/numOfSquares;

function setup(){
  createCanvas(canvasWidth,canvasWidth);
  colorMode(HSB,width,height,100);
  rectMode(CENTER);
}

function draw(){

  background(0);

  for(let j=0; j<numOfSquares; j++){
    for(let i=0; i<numOfSquares; i++){

      let transX = i*squareSize + squareSize/2;
      let transY = j*squareSize + squareSize/2;

      push();
      translate(transX, transY);

      let distance = dist(mouseX, mouseY, transX, transY);
      let scaleValue = map(distance, 0, 600, 10, 50);

      let rotateValue = atan2(mouseY - transY, mouseX - transX);
      rotate(rotateValue);

      //let lerpedColor = lerpColor(startColor, endColor, (i+j*numOfSquares)/400);

      stroke(i, 0, numOfSquares-j);
      fill(180);
      ellipse(0,0,scaleValue,scaleValue);
      pop();
    }
  }

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
