var fps=60;



function radians(degrees) {
	return degrees*Math.PI/180;
}



function dist(x0,y0,x1,y1) {
	return Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
}



function incirc(x0,y0,x1,y1,r) {
	return dist(x0,y0,x1,y1) < r*2;
}



function Button(font,letter,x,y,r) {
	this.x=x;
	this.y=y;
	this.r=r;
	this.font=font;
	this.letter=letter;
	this.hold=false;

	this.State={ UP:0, DOWN:1 };

	this.state=this.State.UP;

	this.draw=function() {

		ctx.textAlign="center";
		ctx.textBaseline="middle";

		switch(this.state) {
			case this.State.UP:
				setFill("#000000");
				setStroke("#FFFFFF");
				setLineWidth(4);
				fillCircle(this.x,this.y,this.r);
				drawCircle(this.x,this.y,this.r);
				setFill("#FFFFFF");
				setFont(font);
				fillText(this.letter,this.x,this.y);
				break;
			case this.State.DOWN:
				setFill("#FFFFFF");
				setStroke("#000000");
				setLineWidth(4);
				fillCircle(this.x,this.y,this.r);
				drawCircle(this.x,this.y,this.r);
				setFill("#000000");
				setFont(font);
				fillText(this.letter,this.x,this.y);
				break;
		}
	}

	this.handleEvents=function() {
		if(incirc(mouseX,mouseY,this.x,this.y,this.r)) {
			if(isMouseDown) {
				if(!this.hold) {
					this.state=this.State.DOWN;
					this.hold=true;
					return true;
				}
			} else {
				this.state=this.State.UP;
				this.hold=false;
			}
		} else {
			this.state=this.State.UP;
			this.hold=false;
		}
		return false;
	}

}



function Menu(font,x,y,r,d) {

	this.x=x;
	this.y=y;
	this.r=r;
	this.maxd=d;
	this.d=0;
	this.di=8;
	this.font=font;
	this.show=true;
	this.visible=true;

	this.buttons=[];

	for(var i=0;i<10;i++) {
		this.buttons.push(new Button(this.font,i.toString(),this.x,this.y,this.r));
	}

	this.draw=function() {

		if(this.visible) {
			var a=0;

			ctx.textAlign="center";
			ctx.textBaseline="middle";

			for(var k=0;k<10;k++) {
				var i=this.x+this.d*Math.cos(radians(a));
				var j=this.y+this.d*Math.sin(radians(a));

				this.buttons[k].x=i;
				this.buttons[k].y=j;

				this.buttons[k].draw();

				if(this.buttons[k].handleEvents()) {
					this.toggle();
				}

				a+=360/10;
			}

			this.d+=this.di;

			if(this.d<0) { this.d=0; this.visible=false; }
			if(this.d>this.maxd) this.d=this.maxd;
		}
	}

	this.toggle=function() {
		this.show=!this.show;

		if(this.show) {
			this.di=Math.abs(this.di);
			this.visible=true;
		} else {
			this.di=-Math.abs(this.di);
		}
	}

}



function draw() {
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	button.draw();

	menu.draw();

	if(button.handleEvents()) {
		menu.toggle();
	}


/*
	setLineWidth(4);
	setStroke("#FFFFFF");
	drawCircle(mouseX,mouseY,10);//*/

}



function main() {
	button=new Button("32px sans","A",canvas.width/2,canvas.height/2,32);
	menu=new Menu("16px sans",canvas.width/2,canvas.height/2,24,128);
	setInterval(draw,1000/fps);
}

main();
