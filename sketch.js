function rotatex( point , center , angle ){

  var output = createVector( 0 , 0 );

  var point1 = p5.Vector.sub( point , center );

  output.x = point1.x*cos( angle ) - point1.y*sin( angle );

  output.y = point1.x*sin( angle ) + point1.y*cos( angle );

  output.add( center );

  return output;

}

function setup(){
  
  createCanvas( windowWidth , windowHeight);
 
  background( 0 , 0 , 0 );

}

function draw(){
  
 //background( 255 , 255 ,255 );

  noStroke();

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
  var N = 100;
  
  for(var n= 0 ; n < N ; n++){
  
  push();

  // setting the angle for which the balls will be rotating at
  var ang = n/N*2*PI;
  
  rotate(ang);
 
  //creating the ellipse
 
  fill( r , g , b , 2 );
 
  ellipse( p1.x , p1.y , random( 1 , 100 ) , random( 1 , 100 ) );
  
  stroke( r ,g , b , 22);
  
  line( p1.x , p1.y , mouseX , mouseY );
  }
  
  if( mouseIsPressed ){
    background( 0 , 0 , 0 );
  }
}
function keyTyped() {
  if( key === 's' ) {
    saveCanvas( 'canvas' , 'jpg' );
    console.log("saved");
  }
 }
