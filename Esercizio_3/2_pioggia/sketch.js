var drop = []

function setup() {
  createCanvas(1512, 801);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
}

function draw() {
  background(0);
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
}
}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 2.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}

function keyPressed(){
	if (key == 's') save("pioggia.png") 
}