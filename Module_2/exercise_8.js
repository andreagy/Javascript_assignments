'use strict';

let exampleArray = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(stringArray) {
  let returnString = "";
  for (let string of stringArray) {
    returnString += string;
  }
  return returnString;
}

document.querySelector('#target').innerHTML = concat(exampleArray);