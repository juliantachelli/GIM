let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(15);
}

function draw() {
  background(0, 20); // Aggiunge una leggera sfumatura allo sfondo
  
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].display();
  }
  
  if (random() < 0.2) {
    let x = random(width);
    let drop = new Drop(x);
    drops.push(drop);
  }
}

class Drop {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.speed = random(3, 10); // Velocità casuale della goccia
  }
  
  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.speed = random(3, 10);
    }
  }
  
  display() {
    fill(255,0,0);
    text(floor(random(10)), this.x, this.y);
  }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function keyPressed(){
	if (key == 's') save("bloody_rain.png") 
}