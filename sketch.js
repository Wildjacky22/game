setupGlobalVariables = function() {

  bgColor = color( 0 , 0 , 0 );
}

function setup() {
  createCanvas( windowWidth , windowHeight );

 noStroke();
  
 background( bgColor );
  
}
function draw() {
  ellipse(mouseX , mouseY , 2 , 2 );
    fill( 66 , 33 , 240 , 200);
  
 ellipse( mouseX , mouseY , 75 , 75 );
    fill( 66 , 44 , 240 , 200 );
   
  ellipse( mouseX , mouseY , 70 , 70 );
    fill( 35 , 35 , 250 , 200 );
    
  ellipse( mouseX , mouseY , 65 , 65 );
    fill( 45 , 45 , 249 , 200 );
    
  ellipse( mouseX , mouseY , 60 , 60 );
    fill( 55 , 55 , 240 , 200 );
    
  ellipse( mouseX , mouseY , 55 , 55 );
    fill( 83 , 66 , 244 , 200 );
    
  ellipse( mouseX , mouseY , 50 , 50 );
    fill( 65 , 83 , 244 , 200 );
  
  ellipse( mouseX , mouseY , 45 , 45 );
    fill( 66 , 116 , 244 , 200 );
    
  ellipse( mouseX , mouseY , 40 , 40 );
    fill( 66 , 138 , 244 , 200 );
    
  ellipse( mouseX , mouseY , 35 , 35 );
    fill( 66 , 153 , 255 , 200 );
    
  ellipse( mouseX , mouseY , 30 , 30 );
    fill( 66 , 177 , 244 , 200 );
    
  ellipse( mouseX , mouseY , 25 , 25 );
   fill( 66 , 192 , 244 , 200 );
  
  ellipse( mouseX , mouseY , 20 , 20 );
   fill( 66 , 212 , 244 , 200);

  ellipse( mouseX , mouseY , 15 , 15 );
    fill( 66 , 233 , 255 , 200 );
    
}
