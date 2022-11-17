'use strict';

const diceNumber = +prompt("How many dice we have?");
let roll = 0;
let sum = 0;
for (let dice = 1; dice <= diceNumber; dice++) {
  roll = Math.floor((Math.random() * (6-1) ) +1);
  sum += roll;
}
document.querySelector('#target').innerHTML = `Sum of results is: ${sum}`;