function setup(){
  createCanvas(500,500);
  background(0);
  colorMode(HSB,width,height,100);
  noStroke();
}

function draw(){
  //Comment here
  // fill(255,0,0);
  // rect(20,20,200,200);
  // stroke(0);
  // strokeWeight(2);
  //
  // ellipse(350,200,200,200);
  // line(60,60,100,100);
  // point()
  let stepX = mouseX +1;
  let stepY = mouseY +1;

  for(let gridY=0; gridY<height; gridY=gridY+stepY){
    for(let gridX=0; gridX<width; gridX=gridX+stepX){
      fill(gridX,height-gridY,100);
      rect(gridX,gridY,stepX,stepY);
    }
  }

}

function keyPressed(){
  if(key=='s' || key=='S'){
    saveCanvas(gd.timestamp(), 'png')
  }
}
