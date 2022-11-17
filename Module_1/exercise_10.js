'use strict';
import Math;

let diceNumber = parseInt(prompt("How many dice we have?"))
let sumOfEyes = parseInt(prompt("What is the sum of the eye numbers you want?"))

let sum = 0;
for (let i = 0; i < 10000; i++) {
    let roll = 0;
    for (let dice = 1; dice <= diceNumber; dice++) {
        roll += Math.floor(Math.random() * 6) +1;
        if (roll == sumOfEyes) {
            sum++
        }
    }
}
probability = (sum/10000)*100;

document.querySelector('.probability').innerHTML = 'Probability is ${probability}';