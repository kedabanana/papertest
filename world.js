

var path = new Path();
path.strokeColor = 'blue';
var start =  new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [100, -50]);


function getBorder(view) {
	var boundgap = 5;
	var newwidth = view.bounds.width - (boundgap * 2);
	var newheight = view.bounds.height - (boundgap *2);
	var border = new Rectangle(boundgap, boundgap, newwidth, newheight);
	return border
	}

console.log("Create boundary");
corner = new Size(60, 60);
border = new Path.Rectangle(getBorder(view), corner);


border.strokeColor="red";


var myCircle = new Path.Circle(new Point(100, 100), 50);
myCircle.fillColor = 'black';

function onResize(event) {
	myCircle.position = view.center;
	border.remove();
	b = view.bounds
	console.log(b.width);
	console.log(b.height);
	border = new Path.Rectangle(getBorder(view), corner);
	border.strokeColor="blue";
	console.log("resizing");
	
}
