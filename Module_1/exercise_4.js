'use strict';

const studentName = prompt("Give your name to the Sorting Hat");
let result = `${studentName}, now you are a `
const sort = Math.floor(Math.random() * 4) +1;
switch (sort) {
  case 1:
    result += 'Gryffindor';
    break;
  case 2:
    result += 'Slytherin';
    break;
  case 3:
    result += 'Hufflepuff';
    break;
  case 4:
    result += 'Ravenclaw';
    break;
}

document.querySelector('#target').innerHTML = result;