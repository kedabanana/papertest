

var path = new Path();
path.strokeColor = 'blue';
var start =  new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [100, -50]);

/* Found online :) */
function getRandomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

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


function World(id, xmax, ymax) {
	this.id = id;
	this.XMAX = 1000;
	this.YMAX = 1000;
	this.DEPOSITMAX = 100
	this.deposits = [];


}


/* Create quanitity of deposits, random size/color */
World.prototype.spreadDeposits = function(quantity) {
	for (var i = 0; i < quantity; i++) {
		var size = Math.floor(Math.random() * this.DEPOSITMAX);
		var xloc = Math.floor(Math.random() * this.XMAX);
		var yloc = Math.floor(Math.random() * this.YMAX);
		this.deposits.push(new Deposit(new Point(xloc, yloc), size, getRandomColor()));
	}
}



/* A deposit of Goo */
function Deposit(loc, size, color) {
	this.loc = loc;
	this.size = size;
	this.color = color;
	this.group = new Group(new Path.Circle(this.loc, this.size));
	this.group.fillColor = this.color;
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
	
p = new World();
p.spreadDeposits(100);
