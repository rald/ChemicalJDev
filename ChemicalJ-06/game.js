function rnd(n) {
	return Math.floor(Math.random()*n);
}

function RGB(r,g,b) {
	return "rgb("+r+","+g+","+b+")";
}

function setPixel(x,y,s) {
  ctx.fillRect(x*s,y*s,s,s);
}

function printChar(f,w,h,c,x,y,s,fg,bg) {
	for(var j=0;j<h;j++) {
		for(var i=0;i<w;i++) {
			var k=c.charCodeAt(0);
			var l=i+j*w+k*w*h;
			if(f[l]==0) {
				setFillStyle(bg);
				setPixel(x+i,y+j,s);
			} else {
				setFillStyle(fg);
				setPixel(x+i,y+j,s);
			}
		}
	}
}

function print(f,w,h,t,x,y,s,fg,bg) {
	for(var i=0;i<t.length;i++) {
		var c=t.charAt(i);

		if(c=='\n') {
			y+=h;
		} else if(c=='\r') {
			x=0;
		} else if(c=='\t') {
			x+=w*8;
		} else {
			printChar(f,w,h,c,x,y,s,fg,bg);
			x+=w;
		}

		if(x>canvas.width) {
			x=0;
			y+=h;
		}
	}
}

print(font,8,8,"The quick brown fox jumps over the lazy dog.",0,0,2,"#FFFFFF","#000000");
print(font,8,8,"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",0,16,2,"#FFFFFF","#000000");
