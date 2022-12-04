'use strict';


const button = document.querySelector('#start');
button.addEventListener('click', function(evt){
  let calculation = document.getElementById('calculation');
  if (calculation.value.includes('+')) {
    const operation = calculation.value.split('+');
    const num1 = parseInt(operation[0]);
    const num2 = parseInt(operation[1]);
    const result = num1 + num2;
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (calculation.value.includes('-')) {
    const operation = calculation.value.split('-');
    const num1 = parseInt(operation[0]);
    const num2 = parseInt(operation[1]);
    const result = num1 - num2;
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (calculation.value.includes('*')) {
    const operation = calculation.value.split('*');
    const num1 = parseInt(operation[0]);
    const num2 = parseInt(operation[1]);
    const result = num1 * num2;
    document.querySelector('#result').innerHTML = `${result}`;
  }
  if (calculation.value.includes('/')) {
    const operation = calculation.value.split('/');
    const num1 = parseInt(operation[0]);
    const num2 = parseInt(operation[1]);
    const result = num1 / num2;
    document.querySelector('#result').innerHTML = `${result}`;
  }
});
