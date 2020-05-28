var pad=null;
var player=null;



function draw() {

	setFillStyle("#000000");
	fillRect(0,0,canvas.width,canvas.height);

	player.draw();
	pad.draw();

	player.update();

	pad.handleEvents(touches);

}



function main() {

	var size=32,gap=32;

	pad=new Pad("16px sans",gap*2,canvas.height-gap*4,size,gap);
	player=new Player((canvas.width-16)/2,0,16,32);

	setInterval(draw,1000/60);

}



main();
