let canvasWidth = 500;
let numOfSquares = 20;
let squareSize = canvasWidth/numOfSquares;
let startColor;
let endColor;
let strokeMinWidth = 2;
let strokeMaxWidth = 5;

let y = -50;

function setup(){
  createCanvas(canvasWidth,canvasWidth);
  colorMode(HSB,width,height,100);
  startColor = color(100,100,100);
  endColor = color(400,400,100);
  rectMode(CENTER);
}

function draw(){

  translate(0, 200);

  for(let j=0; j<numOfSquares; j++){
    for(let i=0; i<numOfSquares; i++){

      // let transX = i*squareSize + squareSize/2;
      // let transY = j*squareSize + squareSize/2;

      //for (var a=0; a<10; a++) {

          push();
          strokeWeight(3);

          beginShape();
          // vertex(10, 10);
          // vertex(35, 0);
          // vertex(-35, 0);
          // vertex(-10, -10);

    		  if(y == -50) {
    			     y = 50;
    		  } else {
    			     y = -50;
          }

          endShape();
          pop();
      //}
    }
  }
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
