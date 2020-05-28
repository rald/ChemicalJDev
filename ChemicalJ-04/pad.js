function Pad() {
	this.font="16px sans";
	this.size=32;
	this.gap=32;
	this.state=Pad.NONE;
	this.buttons=[];
	this.x=null;
	this.y=null;
	this.data=null;

	this.init=function() {
		this.x=this.gap*2;
		this.y=canvas.height-this.gap*4;
		this.data=[
			{ letter: "",  x: this.x,                   y: this.y-this.gap },
			{ letter: "",  x: this.x,                   y: this.y+this.gap },
			{ letter: "",  x: this.x-this.gap,          y: this.y          },
			{ letter: "",  x: this.x+this.gap,          y: this.y          },
			{ letter: "",  x: this.x-this.gap,          y: this.y-this.gap },
			{ letter: "",  x: this.x-this.gap,          y: this.y+this.gap },
			{ letter: "",  x: this.x+this.gap,          y: this.y+this.gap },
			{ letter: "",  x: this.x+this.gap,          y: this.y-this.gap },
			{ letter: "B", x: canvas.width-this.size*4, y: this.y          },
			{ letter: "A", x: canvas.width-this.size*2, y: this.y          }
		];
	}

	this.init();

	for(var i=0;i<this.data.length;i++) {
		this.buttons.push(new Button(this.font,this.data[i].letter,this.data[i].x,this.data[i].y,this.size,this.size));
	}

	this.draw=function() {

		this.init();

		for(var i=0;i<this.buttons.length;i++) {
			this.buttons[i].x=this.data[i].x;
			this.buttons[i].y=this.data[i].y;
		}

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

