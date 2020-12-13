## Creative Coding Year 4 - Portfolio of Work

This site is a portfolio of the work I have completed so far in the Creative Coding module. Here you will find various p5.js sketches, and some explanations of the process involved in creating them.


### Sketch 1 - Introduction

![Image](https://github.com/IADT-John-Montayne/exercise-01-color-shape-tarakellybrophy/blob/master/Main%20Exercises/Introduction/Images/201213_211608_181.png)

This was an introduction to the Creative Coding module. It uses HSB colour mode instead of RGB. The size and amount of squares/rectangles can be adjusted using the mouse position on the canvas.

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
  let stepX = 10;
  let stepY = 10;

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

