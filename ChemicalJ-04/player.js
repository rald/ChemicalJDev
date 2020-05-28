function Player(x,y,w,h) {
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.speed=4;
	this.dx=0;
	this.dy=0;
	this.g=0.75;
	this.jumpHeight=16;
	this.canJump=false;
	this.state=Player.JUMPING;



	this.draw=function() {
		setFillStyle("#00FF00");
		fillRect(this.x,this.y,this.w,this.h);
	}



	this.updateIdle=function() {
		this.dx=0;

		if((pad.state & Pad.LEFT)!=0) {
			this.state=Player.WALKING;
			this.dx=-this.speed;
			this.x+=this.dx;
		}

		if((pad.state & Pad.RIGHT)!=0) {
			this.state=Player.WALKING;
			this.dx=this.speed;
			this.x+=this.dx;
		}

		if((pad.state & Pad.A)!=0) {
			if(this.canJump) {
				this.state=Player.JUMPING;
				this.dy=-this.jumpHeight;
				this.canJump=false;
			}
		}

		this.dy+=this.g;
		this.y+=this.dy;

		if(this.y+this.h>floorValue) {
			this.dy=0;
			this.y=floorValue-this.h;
			this.canJump=true;
		}

		if(this.x<0) {
			this.x=0;
		}

		if(this.x>canvas.width-this.w) {
			this.x=canvas.width-this.w;
		}
	}



	this.updateWalking=function() {
		this.state=Player.IDLE;
		this.dx=0;

		if((pad.state & Pad.LEFT)!=0) {
			this.state=Player.WALKING;
			this.dx=-this.speed;
			this.x+=this.dx;
		}

		if((pad.state & Pad.RIGHT)!=0) {
			this.state=Player.WALKING;
			this.dx=this.speed;
			this.x+=this.dx;
		}

		if((pad.state & Pad.A)!=0) {
			if(this.canJump) {
				this.state=Player.JUMPING;
				this.dy=-this.jumpHeight;
				this.canJump=false;
			}
		}

		this.dy+=this.g;
		this.y+=this.dy;

		if(this.y+this.h>floorValue) {
			this.dy=0;
			this.y=floorValue-this.h;
			this.canJump=true;
		}

		if(this.x<0) {
			this.x=0;
		}

		if(this.x>canvas.width-this.w) {
			this.x=canvas.width-this.w;
		}
	}



	this.updateJumping=function() {
		this.state=Player.IDLE;
		this.dx=0;

		if((pad.state & Pad.LEFT)!=0) {
			this.dx=-this.speed;
			this.x+=this.dx;
		}

		if((pad.state & Pad.RIGHT)!=0) {
			this.dx=this.speed;
			this.x+=this.dx;
		}

		this.dy+=this.g;
		this.y+=this.dy;

		if(this.y+this.h>floorValue) {
			this.dy=0;
			this.y=floorValue-this.h;
			this.canJump=true;
		}

		if(this.x<0) {
			this.x=0;
		}

		if(this.x>canvas.width-this.w) {
			this.x=canvas.width-this.w;
		}
	}



	this.update=function() {
		switch(this.state) {
			case Player.IDLE: this.updateIdle(); break;
			case Player.WALKING: this.updateWalking(); break;
			case Player.JUMPING: this.updateJumping(); break;
		}
	}



}

Player.IDLE=0;
Player.WALKING=1;
Player.JUMPING=2;
