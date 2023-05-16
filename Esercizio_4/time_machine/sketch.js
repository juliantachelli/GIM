let birthDate;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  birthDate = prompt('Stai per calcolare il tuo tempo di vita sul pianeta terra.\n'+
  'Inserisci la tua data di nascita (gg/mm/aaaa).');
  
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw(){
  background(255);
  // Inserisci la tua data di nascita nel formato gg/mm/aaaa
  let dateParts = birthDate.split("/");
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);

  // Calcola i giorni, mesi, anni, ore, minuti e secondi passati dalla data di nascita
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();

  let yearsPassed = currentYear - year;
  let monthsPassed = currentMonth - month;
  let daysPassed = currentDay - day;
  let hoursPassed = currentHour;
  let minutesPassed = currentMinute;
  let secondsPassed = currentSecond;

  // Verifica se il compleanno di quest'anno è già passato
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    yearsPassed--;
    monthsPassed += 12;
  }

  if (currentDay < day) {
    let previousMonthDate = new Date(currentYear, currentMonth - 1, 0);
    daysPassed += previousMonthDate.getDate();
    monthsPassed--;
  }
  const r = (sin(frameCount * 0.031) + 1) * 127.5
	const g = (sin(frameCount * 0.032) + 1) * 127.5
	const b = (sin(frameCount * 0.033) + 1) * 127.5
	fill(r, g, b) 
  textSize(50);
  text("SEI VIVO DA:", width / 2, height / 3 - 100);
  textSize(50);
 
  //text("testo"+infovar, x, y)
  text(yearsPassed + " anni", width / 2, height / 3);
  text(monthsPassed + " mesi", width / 2, height / 3 + 70);
  text(daysPassed + " giorni", width / 2, height / 3 + 140);
  text(hoursPassed + " ore", width / 2, height / 3 + 210);
  text(minutesPassed + " minuti", width / 2, height / 3 + 280);
  text(secondsPassed + " secondi", width / 2, height / 3 + 350);

}
