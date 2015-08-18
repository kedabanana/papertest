

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
color = "green"
corner = new Size(60, 60);
border = new Path.Rectangle(getBorder(view), corner);


border.strokeColor=color;


var c = {
	center : [50, 50],
	radius : 40,
	fillColor: "red"
}


var xloc = 20;
var yloc = 20;
var size = 20;
var circle = new Path.Circle(new Point(xloc, yloc), size);
circle.fillColor = "red";

function onResize(event) {
	border.remove();
	b = view.bounds
	border = new Path.Rectangle(getBorder(view), corner);
	border.strokeColor=color;
	
}


var World = new function() {
	var group = new Group();
	var xmax = 1000;
	var ymax = 1000;
	var depositmax = 20

	var deposits = [];
	for (var i = 0; i < 333; i++) {
		var size = Math.floor(Math.random() * depositmax);
		var xloc = Math.floor(Math.random() * xmax);
		var yloc = Math.floor(Math.random() * ymax);
		console.log(xloc);
		console.log(yloc);
		deposits[i] = new Path.Circle(new Point(xloc, yloc), size);
		deposits[i].fillColor = "red";
	}
	return 




}


