function setup() {
  createCanvas( windowWidth , windowHeight );

}


function draw() {
  ellipse( mouseX , mouseY , 50 , 50 );

  // Define the fill color based off of the time variable.
  // as time goes by, the color will change.
  fillcolor = color( t , 100 , 100 , markerAlpha );

  // Set the fill color
  fill( fillcolor );
}
