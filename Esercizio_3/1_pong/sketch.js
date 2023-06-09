var balls = [];

alert('ATTENZIONE:\n'+
		  'Questa composizione, se guardata attentamente,\n'+
		  'potrebbe crearti dipendenza.\n\n'+
		  'Clicca con il mouse per creare nuovi "pong."\n\n'+
	    'Buon divertimento :)');

function setup() { 
  createCanvas(windowWidth, windowHeight);
	background(0)

	for (var i = 0; i < 500; i++) {
    balls[i] = new Ball(width/2, height/2);
  }
} 

function draw(){
		background(0, 10)

	
	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].display();
		balls[i].bounce();
		fill(255)
		
	}
}

function mousePressed() {
balls.push( new Ball(mouseX, mouseY) );
}

function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.sz = 12;
	this.xspeed = random(-3, 3);
	this.yspeed = random(-3, 3);
	
	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	};
	
	this.display = function() {
		const r = (cos(frameCount * 0.031) + 1) * 127.5
		const g = (cos(frameCount * 0.032) + 1) * 127.5
		const b = (cos(frameCount * 0.033) + 1) * 127.5
	fill(r, g, b);
	//console.log(r,g,b)
		noStroke();
		ellipse(this.x, this.y, this.sz, this.sz);
	};
	
	this.bounce = function() {
		if (this.x > width || this.x < 0) {
			this.xspeed *= -1;
		}
		if (this.y > height || this.y < 0) {
			this.yspeed *= -1;
		}
	}
}

function keyPressed(){
	if (key == 's') save("pong.png") 
}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}