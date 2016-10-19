var canvas = document.getElementById('canvas'); //присваиваем переменной значение элемента странницы
var ctx = canvas.getContext('2d'); //контекст

canvas.width = window.innerHeight; 
canvas.height = window.innerHeight; //наш канвас будет квадратный, со стороной равной высоте окна



var Circle = function (x, y, r, dx, dy, color) {
	this.x = x || 0;
	this.y = y || 0;
	this.radius = r || 0;
	this.dx = dx || 0;
	this.dy = dy || 0;
	this.color = color || '#FFFFFF';
	this.angle = 0;
	this.draw = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
	this.drawRect = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
		ctx.fill();
		ctx.closePath();
	}

	this.move = function () {
		this.x += this.dx;
		this.y += this.dy;
	}

	this.moveByCircle = function () {
		this.x += Math.cos(this.angle)*this.radius;
		this.y += Math.sin(this.angle)*this.radius;
		this.angle += 0.1;
	}
	return this;
};

var a = new Circle(300, 150, 20, 5, 3);

function mainLoop() {
	a.move();

	if (a.x + a.radius >= canvas.width || a.x - a.radius <= 0)
		a.dx *= -1;

	if (a.y + a.radius >= canvas.height || a.y - a.radius <= 0)
		a.dy *= -1;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	a.drawRect(ctx);
};
function circleMove() {
	a.moveByCircle();
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	a.drawRect(ctx);
}
setInterval(circleMove, 1000 / 45);	//	45 FPS
