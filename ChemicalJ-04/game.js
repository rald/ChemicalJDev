var pad=null;
var player=null;

function Player(x,y) {
	this.x=x;
	this.y=y;
	this.w=16;
	this.h=32;
	this.speed=4;

	this.draw=function() {
		setFillStyle("#00FF00");
		fillRect(this.x,this.y,this.w,this.h);
	}

	this.update=function() {

		if((pad.state & Pad.UP)!=0) {
			this.y-=this.speed;
		}

		if((pad.state & Pad.DOWN)!=0) {
			this.y+=this.speed;
		}

		if((pad.state & Pad.LEFT)!=0) {
			this.x-=this.speed;
		}

		if((pad.state & Pad.RIGHT)!=0) {
			this.x+=this.speed;
		}

		if((pad.state & Pad.A)!=0) {

		}

		if((pad.state & Pad.B)!=0) {

		}

		if(this.x<0) {
			this.x=0;
		}

		if(this.x>canvas.width-this.w) {
			this.x=canvas.width-this.w;
		}

		if(this.y<0) {
			this.y=0;
		}

		if(this.y>canvas.height-this.h) {
			this.y=canvas.height-this.h;
		}

	}

}

Player.IDLE=0;
Player.WALKING=1;
Player.JUMPING=2;

function draw() {
	setFillStyle("#000000");
	fillRect(0,0,canvas.width,canvas.height);

	player.draw();
	pad.draw();

	player.update();
	pad.handleEvents(touches);
}

function main() {

	pad=new Pad("32px sans");
	player=new Player(0,0);

	setInterval(draw,1000/60);
}

main();
