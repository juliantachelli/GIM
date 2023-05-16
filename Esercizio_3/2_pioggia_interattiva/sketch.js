function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){

	background (random(1, 20), 0, random(1, 150))
//per far ripetere la stessa funzione piu volte scrivere for(let i=0; i<50; i=i+1){

rotateX(mouseY*-0.01)
rotateY(mouseX*-0.01)

let lato=500

if(mouseIsPressed) randomSeed(0)

for(let i=0; i<200; i=i+1){

let spessore = random(1,2)
let lunghezza = random(20,200)
let posX=random(-lato, lato)
let posY=random(-lato, lato)
let posZ=random(-lato, lato)

stroke(255)
strokeWeight(spessore)
line(posX,posY,posZ,posX,posY+lunghezza,posZ)
}
}
//option con freccette per spostare e option+shift per clonare

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}