let fps=60;
let canvas;
let ctx;

let size=2;
let text="Hello World";

let frame=0;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function radians(degrees) {
	return degrees*Math.PI/180;
}



function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	draw();
}



function draw() {

	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	Graphics.drawText(ctx,text,0,0,4,font,["transparent",palette[6]]);

	Graphics.drawPoint(ctx,50,125,palette[6]);

	Graphics.drawLine(ctx,100,100,150,150,palette[6]);

	Graphics.drawCircle(ctx,200,125,25,palette[6]);

	Graphics.fillCircle(ctx,275,125,25,palette[6]);

	Graphics.drawRect(ctx,325,100,50,50,palette[6]);

	Graphics.fillRect(ctx,400,100,50,50,palette[6]);

	for(let i=0;i<palette.length;i++) {
		Graphics.fillRect(ctx,(i%8)*55+30,Math.floor(i/8)*80+180,40,40,palette[i]);
		Graphics.drawRect(ctx,(i%8)*55+25,Math.floor(i/8)*80+175,50,50,palette[12]);
		Graphics.drawText(ctx,i.toString(),(i%8)*55+25+(50-font.width*size*i.toString().length)/2,Math.floor(i/8)*80+175+55,size,font,["transparent",palette[12]]);
	}


}



function main() {

	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	
	resize();

	window.onresize=resize;

}
		
		

main();

