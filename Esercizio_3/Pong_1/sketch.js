let posizioneY
let posizioneX
let velX
let velY

function setup(){
	createCanvas(1470, 760)
	posizioneX = width/2
	posizioneY = height/2 
	velX = 3
	velY = 2
	background(0, 0, 0)
}

function draw(){
	noStroke()
	//fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)

	const r = (sin(frameCount * 0.031) + 1) * 127.5
	const g = (sin(frameCount * 0.032) + 1) * 127.5
	const b = (sin(frameCount * 0.033) + 1) * 127.5
	fill(r, g, b) 

	const d = sin(frameCount * 0.06) * 60 + 70

	ellipse(posizioneX, posizioneY, d, d)
	//ellipse(width - posizioneX, posizioneY, d, d)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX <= 0) velX = -velX
	if (posizioneY >= height || posizioneY <= 0) velY = -velY
}

function keyPressed(){
	if (key == 's') save("pong.png") 
}