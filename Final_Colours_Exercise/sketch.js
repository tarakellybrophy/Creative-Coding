//Partially based on a tutorial by Kelly Lougheed on Medium
//https://medium.com/@kellylougheed/rainbow-paintbrush-in-p5-js-e452d5540b25

let hue;

function setup(){
  createCanvas(800,800);
  hue = 0;
  //angleMode(DEGREES);
}

function draw(){

  //numOfSegments = map(mouseX,0,width,10,60);
  //stepAngle = 360/numOfSegments;
  //radius = 150;
  //innerRadius = 100;
  //outerRadius = innerRadius * 2;

  // push()
  // translate(250,250);
  // rotate(45);
  // fill(200,0,0);
  // beginShape(TRIANGLE_FAN);
  // vertex(0,0);
  //
  // for(let a=0; a<=360; a+=stepAngle){
  //     let vx = (outerRadius * cos(a));
  //     let vy = (outerRadius * sin(a));
  //     fill(a,200,200);
  //     vertex(vx,vy);
  //   }
  // endShape()
  // pop()

}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  }
  else {
    hue++;
  }
  colorMode(HSL,360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png');
  }

  if(key=='r' || key=='R'){
    stroke(360);
    rect(mouseX, mouseY, 50, 50);
    if (hue > 360) {
      hue = 0;
    }
    else {
      hue++;
    }
    fill(hue, 200, 200);
  }
}
