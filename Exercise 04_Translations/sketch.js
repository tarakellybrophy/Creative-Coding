function setup(){
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw(){

  push();
    translate(200,200);
    rect(0,0,50,100);
    rotate(25)
  pop();

  push();
    translate(200,200);
    rect(0,0,50,100);
    rotate(45)
  pop();

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
