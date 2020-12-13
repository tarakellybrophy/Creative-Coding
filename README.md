## Creative Coding Year 4 - Portfolio of Work

This site is a portfolio of the work I have completed so far in the Creative Coding module. Here you will find various p5.js sketches, and some explanations of the process involved in creating them.


### Sketch 1 - Introduction

![Image](https://github.com/IADT-John-Montayne/exercise-01-color-shape-tarakellybrophy/blob/master/Main%20Exercises/Introduction/Images/201213_211608_181.png)

This was an introduction to the Creative Coding module. It uses HSB colour mode instead of RGB. The size and amount of squares/rectangles can be adjusted using the mouse position on the canvas.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
    <script src="../../libraries/p5/p5.min.js" type="text/javascript"></script>

    <script src="../../libraries/p5/p5.dom.min.js" type="text/javascript"></script>
    <script src="../../libraries/generative-design-library/generative-design-library.js" type="text/javascript"></script>

    <script src="sketch.js" type="text/javascript"></script>

    <link href="../../styles/main.css" rel="stylesheet" type="text/css">

    <!-- help tooltip start -->
    <script src="../../libraries/jquery/jquery.js" type="text/javascript"></script>
    <script type="text/javascript" src="../../libraries/tooltipster/tooltipster.bundle.js"></script>
    <link rel="stylesheet" type="text/css" href="../../libraries/tooltipster/tooltipster.bundle.css" />
    <link rel="stylesheet" type="text/css" href="../../libraries/tooltipster/tooltipster-sideTip-noir.min.css" />
    <script src="../../libraries/help-tooltip.js" type="text/javascript"></script>
    <!-- help tooltip end -->
  </head>
  <body>
    <span id="help" data-tooltip-content="#help-content">?</span>
  </body>
</html>

