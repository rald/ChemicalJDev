var balls=[];
var numBalls=10;
var gravity=0.98;
var epsilon=0.0001



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function drand() {
	return Math.random();
}



function RGB(r,g,b) {
	return "rgb("+r+","+g+","+b+")";
}



function Ball(x,y,r,color) {
	this.x=x;
	this.y=y;
	this.r=r;
	this.color=color;

	this.dx=(rnd(2)==0?-1:1)*(drand()*10);
	this.dy=0;

	this.init=function() {
		this.y=rnd(canvas.height/2);
		this.x=rnd(canvas.width);
		this.dx=(rnd(2)==0?-1:1)*(drand()*10);
		this.dy=0;
		this.color=RGB(rnd(256),rnd(256),rnd(256));
	}

	this.draw=function() {
		setFill(this.color);
		setStroke("#FFFFFF");
		fillCircle(this.x,this.y,16);
		drawCircle(this.x,this.y,16);
	}

	this.update=function() {

		this.dy+=gravity;

		this.x+=this.dx;
		this.y+=this.dy;

		if(this.x<this.r) {
			this.x=this.r;
			this.dx=Math.abs(this.dx);
		}

		if(this.x>canvas.width-this.r) {
			this.x=canvas.width-this.r;
			this.dx=-Math.abs(this.dx);
		}

		if(this.y+this.dx>canvas.height-this.r) {
			if(Math.abs(this.dy)<epsilon) {
				this.init();
			} else {
				this.y=canvas.height-this.r;
				this.dy=-Math.abs(this.dy);
			}
		}

	}

}



function draw() {

	setFill("#00000010");
	fillRect(0,0,canvas.width,canvas.height);

	for(var i=0;i<balls.length;i++) balls[i].draw();

	for(var i=0;i<balls.length;i++) balls[i].update();

}



function main() {

	for(var i=0;i<numBalls;i++) {
		balls.push(new Ball(
				rnd(canvas.width),rnd(canvas.height/2),16,
				RGB(rnd(256),rnd(256),rnd(256))
		));
	}

	setInterval(draw,1000/60);
}



main();
