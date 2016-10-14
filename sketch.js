function setup() {
  createCanvas( windowWidth , windowHeight );
   fill( 0 , 0 , 0 , 1 );
  textAlign( CENTER );
  textSize( 60 );
  text("KALEIDOSCOPE" , 0.5*xRes , 0.5*yRes );
  textSize( 30 );
  text( "Click or touch to draw.\n-marthematicist-" , 0.5*xRes , 0.5*yRes + 35 );
  startTime = millis();
}
}

function draw() {
  ellipse( mouseX , mouseY , 50 , 50 );
  fill( 25 , 25 , 112 , 200 );
}
