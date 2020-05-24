function digit(x,y,z,r,g) {
	var A=1,B=2,C=4,D=8;
	var code=[0,A,B,C,D,A|B,B|C,C|D,D|A,A|C,B|D,A|B|C|D];
	setStroke("#FFFFFF");
	setFill("#FFFFFF");
	if((code[z] & A)!=0) fillCircle(x-g,y-g,r); else drawCircle(x-g,y-g,r);
	if((code[z] & B)!=0) fillCircle(x+g,y-g,r); else drawCircle(x+g,y-g,r);
	if((code[z] & C)!=0) fillCircle(x+g,y+g,r); else drawCircle(x+g,y+g,r);
	if((code[z] & D)!=0) fillCircle(x-g,y+g,r); else drawCircle(x-g,y+g,r);
}

function draw() {
	setFill("#000000");
	fillRect(0,0,canvas.width,canvas.height);

	var x=canvas.width/2;
	var y=canvas.height/2;
	var date=new Date();
	var hours=date.getHours()%12;
	var mins=Math.floor(date.getMinutes()/5);

	digit(canvas.width/2-64-32,canvas.height/2,hours,32,48);
	digit(canvas.width/2+64+32,canvas.height/2,mins,32,48);

}

setInterval(draw,1000/4);

