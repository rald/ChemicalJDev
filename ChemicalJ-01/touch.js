var mouseX = canvas.width/2;
var mouseY = canvas.height/2;
var isMouseDown = false;


canvas.addEventListener("mousedown", function(e) {
  var mousePos = getMousePos(e);
  mouseX = mousePos.x;
  mouseY = mousePos.y;
  isMouseDown = true;
}, false);

canvas.addEventListener("mouseup", function(e) {
  isMouseDown = false;
}, false);

canvas.addEventListener("mousemove", function(e) {
  var mousePos = getMousePos(e);
  mouseX = mousePos.x;
  mouseY = mousePos.y;
}, false);

function getMousePos(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}



canvas.addEventListener("touchstart", function(e) {
  mousePos = getTouchPos(e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchend", function(e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", function(e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

function getTouchPos(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.touches[0].clientX - rect.left,
    y: e.touches[0].clientY - rect.top
  };
}
