let numOfSegments;
let stepAngle;
let radius;

function setup(){
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  angleMode(DEGREES);
  noStroke();
}

function draw(){

  numOfSegments = map(mouseX,0,width,10,40);
  stepAngle = 360/numOfSegments;
  radius = 150;

  push()
  translate(250,250);
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

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
