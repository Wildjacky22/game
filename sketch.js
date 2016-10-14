function setup() {
  createCanvas( windowWidth , windowHeight );

}


function draw() {
  fill( 0 , 0 , 0 , 1 );
  textAlign( CENTER );
  textSize( 60 );
  text("KALEIDOSCOPE" , 0.5*xRes , 0.5*yRes );

  ellipse( mouseX , mouseY , 50 , 50 );

  colorMode( HSB );
 
  fill( 25 , 25 , 121 , 200 );

}
