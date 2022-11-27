'use strict';

function rollDice(numberOfSides) {
  return Math.floor(numberOfSides*Math.random())+1;
}

let sides = parseInt(prompt("How many sides the dice has?"))
let diceRollList = [];
for (let i = 0; ; i++) {
  let diceRoll = parseInt(rollDice(sides));
  diceRollList.push(diceRoll);
  if (diceRoll === sides) {
    break;
  }
}

for (let listItem of diceRollList) {
      document.querySelector('#list').innerHTML += `<li>${listItem}</li>`;
}