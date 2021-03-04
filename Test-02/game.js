let canvas;
let ctx;

let fps=60;

let size=2;
let text="Graphics Test";

let x,y;

let frame;


function rnd(x) {
	return Math.floor(Math.random()*x);
}



function radians(degrees) {
	return degrees*Math.PI/180;
}



function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}



function draw() {

	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	x=(canvas.width-text.length*font.width*size)/2+Math.cos(frame/30)*200;
	y=16;

	Graphics.drawText(ctx,text,x,y,size,font,["transparent",palette[7]]);

	Graphics.drawPoint(ctx,50,125,palette[7]);

	Graphics.drawLine(ctx,100,100,150,150,palette[7]);

	Graphics.drawCircle(ctx,200,125,25,palette[7]);

	Graphics.fillCircle(ctx,275,125,25,palette[7]);

	Graphics.drawRect(ctx,325,100,50,50,palette[7]);

	Graphics.fillRect(ctx,400,100,50,50,palette[7]);

	for(let i=0;i<palette.length;i++) {
		Graphics.fillRect(ctx,(i%8)*55+30,Math.floor(i/8)*80+180,40,40,palette[i]);
		Graphics.drawRect(ctx,(i%8)*55+25,Math.floor(i/8)*80+175,50,50,palette[palette.length-1]);
		Graphics.drawText(ctx,i.toString(),(i%8)*55+25+(50-font.width*size*i.toString().length)/2,Math.floor(i/8)*80+175+55,size,font,["transparent",palette[palette.length-1]]);
	}

	frame++;

}



function main() {

	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	
	resize();

	window.onresize=resize;

	frame=0;

	setInterval(draw,1000/fps);

}
		
		

main();

