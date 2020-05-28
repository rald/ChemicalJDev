var fps=60;
var drawInterval;


function radians(degrees) {
	return degrees*Math.PI/180;
}



function dist(x0,y0,x1,y1) {
	return Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
}



function incirc(x,y,cx,cy,cr) {
	return dist(x,y,cx,cy) <= cr;
}



function inrect(x,y,rx,ry,rw,rh) {
	return x>=rx && x<=rx+w && y>=ry && y<=ry+h;
}



function draw() {
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);



}



function main() {
	drawInterval=setInterval(draw,1000/fps);
}



main();
