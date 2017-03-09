function rotatex( point , center , angle ){

  var output = createVector( 0 , 0 );

  var point1 = p5.Vector.sub( point , center );

  output.x = point1.x*cos( angle ) - point1.y*sin( angle );

  output.y = point1.x*sin( angle ) + point1.y*cos( angle );

  output.add( center );

  return output;

}

function setup(){
  
  createCanvas( windowWidth , windowHeight );
 
  background( 0 , 0 , 0 );

}

function draw(){
  
 //background( 0 , 0 , 0 );

//  noStroke();

strokeWeight( 3 );

 noFill();
  
  //main points for bezier
  
  var c1 = windowWidth*0.5;

  var c2 = windowHeight*0.5;
 
  var v1 = windowWidth*0.3;
 
  var v2 = windowHeight*0.3;


  var r = random( 0 , 35 );
  var g = random( 100 , 255 );
  var b = random( 100 , 255 );

  //creating start point for ellipse
  var p0 = createVector( 80 , 80 );

  //center that they will rotate around
  var c = createVector( width*0.3 , height*0.3 );

  //( point , center , angle )
  var p1 = rotatex( p0 , c , frameCount*0.1 );
 
  push();
 
  //moves origin to center of screen
  translate(0.5*width , 0.5*height);
 
  //stopping point for the for loop
  var N = 50;
  
  for(var n= 0 ; n < N ; n++){
  
  push();

  // setting the angle for which the pints will be rotating at
  var ang = n/N*2*PI;
  
  rotate(ang);
 
  //creating the bezier
 
  stroke( 255 , 255 , 255 , 2 );
  
   for (var i = 0; i < 20 ; i += 20) {
 
    bezier( v1/p1.x , v2/p1.y , 500 , 20  , 410 , 300 , mouseX , mouseY);
 
  }
  //stroke( mouseX*0.3 , mouseY*0.4 , windowWidth*0.5 , 22);
  
 // line( p1.x , p1.y , mouseX , mouseY );
  }
  
  if( mouseIsPressed ){
    background( 0 , 0 , 0 );
  }
}
function keyTyped() {
  if( key === 'a' ) {
    saveCanvas( 'image' , 'png' );
    console.log("saved");
  }
 }
 
