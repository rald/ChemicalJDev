function Pad(font,x,y,size,gap) {
	this.state=Pad.NONE;
	this.font=font;
	this.buttons=[];

	this.x=x;
	this.y=y;
	this.size=size;
	this.gap=gap;


	this.buttons.push(new Button(font,"",x,y-gap,size,size));
	this.buttons.push(new Button(font,"",x,y+gap,size,size));
	this.buttons.push(new Button(font,"",x-gap,y,size,size));
	this.buttons.push(new Button(font,"",x+gap,y,size,size));

	this.buttons.push(new Button(font,"",x-gap,y-gap,size,size));
	this.buttons.push(new Button(font,"",x-gap,y+gap,size,size));
	this.buttons.push(new Button(font,"",x+gap,y+gap,size,size));
	this.buttons.push(new Button(font,"",x+gap,y-gap,size,size));

	this.buttons.push(new Button(font,"B",canvas.width-256,y,size,size));
	this.buttons.push(new Button(font,"A",canvas.width-128,y,size,size));

	this.draw=function() {
		for(var i=0;i<this.buttons.length;i++) {
			this.buttons[i].draw();
		}
	}

	this.handleEvents=function(touches) {
		this.state=Pad.NONE;
		for(var i=0;i<this.buttons.length;i++) {
			if(this.buttons[i].handleEvents(touches)) {
				switch(i) {
					case 0: pad.state|=Pad.UP; break;
					case 1: pad.state|=Pad.DOWN; break;
					case 2: pad.state|=Pad.LEFT; break;
					case 3: pad.state|=Pad.RIGHT; break;
					case 4: pad.state|=Pad.UP|Pad.LEFT; break;
					case 5: pad.state|=Pad.DOWN|Pad.LEFT; break;
					case 6: pad.state|=Pad.DOWN|Pad.RIGHT; break;
					case 7: pad.state|=Pad.UP|Pad.RIGHT; break;
					case 8: pad.state|=Pad.B; break;
					case 9: pad.state|=Pad.A; break;
				}
			}
		}
	}

}

Pad.NONE=0;
Pad.UP=1;
Pad.DOWN=2;
Pad.LEFT=4;
Pad.RIGHT=8;
Pad.A=16;
Pad.B=32;

