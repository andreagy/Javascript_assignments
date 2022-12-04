'use strict';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");


const button = document.querySelector('#start');
button.addEventListener('click', function(evt){
  const number1 = num1.value;
  const number2 = num2.value;
  const operation = document.getElementById('operation');
  if (operation.value === 'add') {
    let result = parseInt(number1) + parseInt(number2)
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (operation.value === 'sub') {
    let result = parseInt(number1) + parseInt(number2)
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (operation.value === 'multi') {
    let result = parseInt(number1) + parseInt(number2)
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (operation.value === 'div') {
    let result = parseInt(number1) + parseInt(number2)
    document.querySelector('#result').innerHTML = `${result}`;
  }
});
