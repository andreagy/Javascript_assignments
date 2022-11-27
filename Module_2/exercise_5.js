'use strict';

let numberList = [];

for (let i = 0; ; i++) {
  let number = parseInt(prompt("Give me a number!"));
  if (numberList.includes(number)) {
    alert("Number has already been given.")
    break
  }
  numberList.push(number);
}
numberList.sort()
console.log(numberList)