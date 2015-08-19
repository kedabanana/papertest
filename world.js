

var path = new Path();
path.strokeColor = 'blue';
var start =  new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [100, -50]);

/* Found online :) */
function getRandomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}


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

function World(id, xmax, ymax) {
	this.id = id;
	this.XMAX = 1000;
	this.YMAX = 1000;
	this.DEPOSITMAX = 100
	this.deposits = [];
	this.border;


}
World.prototype.drawBorder = function() {
	corner = new Size(20,20);
	this.border = new Path.Rectangle(new Rectangle(0, 0, this.XMAX, this.YMAX), corner);
	this.border.strokeColor = "red";
}

World.prototype.drawScreenBorder = function() {
	var boundgap = 5
	var xstart = view.bounds.x + boundgap;
	var ystart = view.bounds.y + boundgap;
	var newwidth = view.bounds.width - (boundgap * 2);
	var newheight = view.bounds.height - (boundgap * 2);
	var corner = new Size(20, 20);
	this.border = new Path.Rectangle(new Rectangle(xstart, ystart, newwidth, newheight), corner);
	this.border.strokeColor = "red";
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
		


p = new World();
p.spreadDeposits(100);
p.drawBorder();

function validScroll(delta) {
	var newcenter = view.bounds.center + delta;
	if (p.border.contains(newcenter)) {
		return true;
	}
	return false;
}
	
function onMouseDrag(event) {
	var delta = new Point(event.delta);
	if (validScroll(delta)) {
		view.scrollBy(delta);
		p.border.remove();
		p.drawBorder();
	}
}
	
function onResize(event) {
	p.border.remove();
	p.drawBorder();
	
}


