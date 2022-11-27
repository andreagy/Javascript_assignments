'use strict';

function rollDice() {

  return Math.floor(6*Math.random())+1;
}

let diceRollList = [];
for (let i = 0; ; i++) {
  let diceRoll = parseInt(rollDice());
  diceRollList.push(diceRoll);
  if (diceRoll === 6) {
    break;
  }
}

for (let listItem of diceRollList) {
      document.querySelector('#list').innerHTML += `<li>${listItem}</li>`;
}