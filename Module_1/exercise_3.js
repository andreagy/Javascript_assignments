let number1 = prompt("Give me a number!");
let number2 = prompt("Give me a second number!");
let number3 = prompt("Give me a third number!");

const n1 = parseInt(number1);
const n2 = parseInt(number2);
const n3 = parseInt(number3);

let sum = (n1 + n2 + n3);
let product = (n1 * n2 * n3);
let average = (sum / 3);

document.querySelector('#sum').innerHTML = `The sum is ${sum}`;
document.querySelector('#product').innerHTML = `The product is ${product}`;
document.querySelector('#average').innerHTML = `The average is ${average}`;
