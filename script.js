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
// НА БУДУЩЕЕ

// var Game = function () {
// 	this.ball = new Circle(0, 0, 10, 0, 0);
// 	this.paddle = new Paddle();
// 	this.bricks = [];

// 	this.generateLevel = function () {
// 		this.bricks.push(new Brick());
// 	};

// 	this.startGame = function () {

// 	}
// }

// var game = new Game();

// НА БУДУЩЕЕ

var Brick = function(x, y, width, color, health) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = this.width * 0.75;
	this.color = color || "#fff";
	this.health = health || 1;


	this.draw = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.closePath();
	}
	return this;
}

var brickWidth = canvas.width * .1;

var brickAmount = 40;
var bricks = [];

var colors = ['#e33', '#3e3', '#33e', '#ee3', '#3ee', '#e3e'];

for (var i = 0; i < brickAmount; i++) {
	bricks.push(
		new Brick(
			(i % 10) * brickWidth + brickWidth * .05,
	 		((i / 10)|0) * brickWidth * .75 + brickWidth * .05,
	 		brickWidth * .9,
	 		colors[6 * Math.random()|0]));
}

function mainLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	bricks.forEach(function (item) {
		item.draw(ctx);
	});
};

function circleMove() {
	a.moveByCircle();
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	a.drawRect(ctx);
}
setInterval(mainLoop, 1000 / 45);	//	45 FPS
