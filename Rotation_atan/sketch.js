function setup(){
  createCanvas(500,500);
  colorMode(HSB,width,height,100);
  rectMode(CENTER);
}

function draw(){

  let transValueX = width/2;
  let transValueY = height/2;
  let rotateValue = atan2(mouseY - transValueY, mouseX - transValueX);

  for(transValueX=0; transValueX<width; transValueX=transValueX+1){
    //for(transValueY=0; transValueY<width; transValueY=transValueY+mouseY){
      //translate(transValueX,transValueY);
      rotate(rotateValue);
      background(0,0,0);
      fill(225,300,200);
      rect(0,0,100,100);
    //}
  }

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
