var FPS=60;
var canvas;
var ctx;
		


function drawCircle(x,y,radius,style) {
	ctx.beginPath();
	ctx.strokeStyle=style;
	ctx.arc(x,y,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}



function draw() {
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	drawCircle(canvas.width/2,canvas.height/2,100,"#00FF00");
}



function main() {
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
			
	setInterval(draw,1000/FPS);
}
		
		
		
main();
