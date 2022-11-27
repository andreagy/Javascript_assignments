'use strict';

let numberList = [];

for (let i = 0; ; i++) {
  let number = parseInt(prompt("Give me a number!"))
  if (number !== 0) {
    numberList.push(number)
  }
  else {
    break
  }
}
numberList.sort()
numberList.reverse()
console.log(numberList)