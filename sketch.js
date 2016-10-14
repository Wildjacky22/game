function setup() {
  createCanvas( windowWidth , windowHeight );

  markerAlpha = 0.15;
  
  numSpokes = 12;

}
function setup() {
  setupGlobalVariables();
 
  xRes = windowWidth;
  yRes = windowHeight;
 
  colorMode( HSB );
  
   angleMode( DEGREES );
  
 
  fill( 0 , 0 , 0 , 1 );
  textAlign( CENTER );
  textSize( 60 );
  text("BUBBLES" , 0.5*xRes , 0.5*yRes );
  
  createCanvas( xRes , yRes );
 startTime = millis(); 
  
}
function draw() {
  ellipse( mouseX , mouseY , 50 , 50 );

  colorMode( HSB );
 
  fill( 25 , 25 , 121 , 200 );

}
