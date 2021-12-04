let currentEnergy = 3;
let currentRound = 1;

setEnergy();
setRound();

function decreaseEnergy() {
   if (currentEnergy <= 0) return
   currentEnergy -= 1;
   setEnergy();
}

function increaseEnergy() {
   if (currentEnergy >= 10) return
   currentEnergy += 1;
   setEnergy();
}

function setEnergy() {
   const energyCounterText = document.getElementById("energyCounter");
   energyCounterText.innerHTML = "Energy<br>" + currentEnergy + "/10";
}

function setRound() {
   const roundCounterText = document.getElementById("roundCounter");
   roundCounterText.innerHTML = "Round<br>" + currentRound;
}

function nextRound() {
   currentEnergy += 2;
   if (currentEnergy > 10) currentEnergy = 10;
   currentRound += 1;
   setEnergy();
   setRound();
}

function newGame() {
   currentEnergy = 3;
   currentRound = 1;
   setEnergy();
}