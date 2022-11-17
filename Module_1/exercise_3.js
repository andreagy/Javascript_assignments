'use strict';

let number1 = prompt("Give me a number!")
let number2 = prompt("Give me a second number!")
let number3 = prompt("Give me a third number!")

const n1 = parseInt(number1)
const n2 = parseInt(number2)
const n3 = parseInt(number3)

let sum = (n1 + n2 + n3);
let average = (sum / 3);

document.write("Sum of the numbers is: " + sum);
document.write("Average of the numbers is: " + average);

 /*

const firstNum = +prompt("Enter first number!")

document.querySelector('#sum').InnerHTML = 'The sum is ${firstNum}';

 */