let numOfSegments;
let stepAngle;
let radius;

function setup(){
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw(){

  numOfSegments = map(mouseX,0,width,10,40);
  stepAngle = 360/numOfSegments;
  radius = 150;

  push()
  translate(250,300);
  rotate(45);
  fill(200,0,0);
  beginShape(TRIANGLE_FAN);
  vertex(0,0);

  for(let a=0; a<=360; a+=stepAngle){
      let vx = (radius * cos(a));
      let vy = (radius * sin(a));
      fill(a,100,100);
      vertex(vx,vy);
    }
  endShape()
  pop()
}

let startColor = color(360,100,100);
let endColor = color(200,100,100);


for(let a=0; a<10; a++){
  rect(250,100,50,50);
  fill(lerpColor(startColor, endColor, 0.5));
}

// fill(startColor);
// rect(100,100,50,50);
//
// fill(endColor);
// rect(250,100,50,50);

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
