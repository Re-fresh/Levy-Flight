var x;
var y;

function setup() {
	createCanvas(displayWidth,displayHeight);
	x=200;
	y=200;
	background(51);
}

function draw() {
	stroke(254);
	strokeWeight(2);
	point(x, y);
	var r = floor(random(4));

	switch(r){
		case 0:
			x+=1;
			break;

		case 1:
			x-=1;
			break;

		case 2:
			y+=1;
			break;

		case 3:
			y-=1;
			break;
	}

}


// class Walker{
// 	constructor(){
// 		createCanvas(400,400);
// 		this.x = width/2;
// 		this.y = height/2;
// 	}
//
// 	move(){
// 		var choice = Math.floor(Math.random());
// 		if(choice == 0) x++;
// 		else if(choice == 1) x--;
// 		else if(choice == 2) y++;
// 		else y--;
// 	}
//
// 	show(){
// 		background(51);
// 		stroke(255);
// 		strokeWeight(2);
// 		point(x,y);
// 	}
// }
