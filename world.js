

var path = new Path();
path.strokeColor = 'blue';
var start =  new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [100, -50]);


console.log("Create boundary");
var bounds = view.bounds;
var boundgap = 5;
var newwidth = bounds.width - (boundgap * 2);
var newheight = bounds.height - (boundgap *2);

var boundary = new Path.Rectangle(boundgap, boundgap, newwidth, newheight);
boundary.strokeColor = "red";

function onResize(event) {
	console.log("resizing");
	
}
