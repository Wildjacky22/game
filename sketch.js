function setup() {
  createCanvas( windowWidth , windowHeight );

  noStroke();
  
  background( 0 , 0 , 0 )
}
function draw() {
  

  textSize(60);
  fill( 100 , 120 , 255 );
  text("Touch screen or move mouse to draw." , 150 , 300 );
  
  
  var r = random( 33 , 100 );
  var g = random( 0 , 120 );
  var b = random( 155 , 255);
  
 ellipse( mouseX , mouseY , 2 , 2 );
    fill( r , g , b , 100);
  
 ellipse( mouseX , mouseY , 75 , 75 );
    fill( r , g , b , 100 );
   
  ellipse( mouseX , mouseY , 70 , 70 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 65 , 65 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 60 , 60 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 55 , 55 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 50 , 50 );
    fill( r , g , b , 100 );
  
  ellipse( mouseX , mouseY , 45 , 45 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 40 , 40 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 35 , 35 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 30 , 30 );
    fill( r , g , b , 100 );
    
  ellipse( mouseX , mouseY , 25 , 25 );
   fill( r , g , b , 100 );
  
  ellipse( mouseX , mouseY , 20 , 20 );
   fill( r , g , b , 100);

  ellipse( mouseX , mouseY , 15 , 15 );
    fill( r , g , b , 100 );
  
  
  
 //ellipse( mouseX , mouseY , 2 , 2 );
    //fill( 66 , 33 , 240 , 100);
  
 //ellipse( mouseX , mouseY , 75 , 75 );
   // fill( 66 , 44 , 240 , 100 );
   
  //ellipse( mouseX , mouseY , 70 , 70 );
    //fill( 66 , 45 , 250 , 100 );
    
  //ellipse( mouseX , mouseY , 65 , 65 );
    //fill( 66 , 49 , 249 , 100 );
    
  //ellipse( mouseX , mouseY , 60 , 60 );
    //fill( 66 , 55 , 240 , 100 );
    
  //ellipse( mouseX , mouseY , 55 , 55 );
    //fill( 66 , 66 , 244 , 100 );
    
  //ellipse( mouseX , mouseY , 50 , 50 );
    //fill( 65 , 83 , 244 , 100 );
  
  //ellipse( mouseX , mouseY , 45 , 45 );
    //fill( 66 , 116 , 244 , 100 );
    
  //ellipse( mouseX , mouseY , 40 , 40 );
    //fill( 66 , 138 , 244 , 100 );
    
  //ellipse( mouseX , mouseY , 35 , 35 );
    //fill( 66 , 153 , 255 , 100 );
    
  //ellipse( mouseX , mouseY , 30 , 30 );
    //fill( 66 , 177 , 244 , 100 );
    
  //ellipse( mouseX , mouseY , 25 , 25 );
   //fill( 66 , 192 , 244 , 100 );
  
  //ellipse( mouseX , mouseY , 20 , 20 );
   //fill( 66 , 212 , 244 , 100);

  //ellipse( mouseX , mouseY , 15 , 15 );
    //fill( 66 , 233 , 255 , 100 );

  
    
}
