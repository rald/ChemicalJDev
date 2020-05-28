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

	pad=new Pad("32px sans");
	player=new Player((canvas.width-16)/2,0,16,32);

	setInterval(draw,1000/60);

}



main();
