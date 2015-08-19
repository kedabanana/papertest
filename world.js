

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

var rect = new Rectangle(0, 0, 1000, 1000);

var World = new function() {
	var group = new Group();
	var xmax = 1000;
	var ymax = 1000;
	var depositmax = 20
	var rect = new Rectangle(0, 0, xmax, ymax);

	var deposits = [];
	for (var i = 0; i < 333; i++) {
		console.log(this.XMAX);
		var size = Math.floor(Math.random() * depositmax);
		var xloc = Math.floor(Math.random() * this.XMAX);
		var yloc = Math.floor(Math.random() * this.YMAX);
		deposits[i] = new Path.Circle(new Point(xloc, yloc), size);
		deposits[i].fillColor = "red";
	}
	return {
		XMAX: 1000,
		YMAX: 1000,
	}

}


function validScroll(delta) {
	console.log(view.bounds)
	return rect.contains(view.bounds) 
	}
		

function onMouseDrag(event) {
	var delta = new Point(event.delta);
	if (true == validScroll(delta)) {
		view.scrollBy(delta);
		}
	}
	
console.log(World.XMAX);
