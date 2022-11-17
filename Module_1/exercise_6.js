'use strict';

const choice = confirm("Should I calculate the square root?");
const target = document.querySelector('#target');
if (choice) {
  const number = prompt("Enter a number:")
  if (number >= 0) {
    target.innerHTML = `Square root of ${number} is ${Math.sqrt(+number)}`;
  } else {
    target.innerHTML = `Square root of negative number ${number} is not defined.`;
  }
}
  else {
    target.innerHTML = `The square root is not calculated.`;
}