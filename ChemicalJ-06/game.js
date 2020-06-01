function printChar(f,w,h,c,x,y,s,style) {
	setFillStyle(style);
	for(var j=0;j<h;j++) {
		for(var i=0;i<w;i++) {
			var k=c.charCodeAt(0);
			var l=i+j*w+k*w*h;
			if(f[l]==1) {
				fillPixel(x+i,y+j,s);
			}
		}
	}
}

function print(f,w,h,t,x,y,s,style) {
	for(var i=0;i<t.length;i++) {
		var c=t.charAt(i);
		printChar(f,w,h,c,x+i*w,y,s,style);
	}
}

print(font,8,8,"Hello World",0,0,2,"#FFFFFF");
