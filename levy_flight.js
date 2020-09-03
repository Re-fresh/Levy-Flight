var pos;
var prev;

function setup() {
	createCanvas(displayWidth,displayHeight);
  pos = createVector(200,200);
  prev = pos.copy();
  background(51);
  console.log(pos);
}

function draw() {
	stroke(254);
	strokeWeight(2);
	// point(pos.x, pos.y); //Works fine when steps are less
  line(pos.x, pos.y, prev.x, prev.y); //needed when steps are big
  prev.set(pos);

  // making long steps rare and short steps frequent
  var r = random(100);


  var step = p5.Vector.random2D();    //unit vector
  if(r<1){
    step.mult(random(25,100));
  }
  else{
    step.setMag(2);
  }
  // step.mult(12);    // multiply
  // step.mult(random(1,20));

  // pos = pos+step; won't work, cause they're vectors
  pos.add(step);
}
