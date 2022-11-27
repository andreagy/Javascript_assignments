'use strict';

let dogList = []
for (let i = 0; i < 6; i++) {
  let dogName = prompt("What is the name of the dog?");
  dogList.push(dogName)
}
dogList.sort()
dogList.reverse()

for (let listItem of dogList) {
  document.querySelector('#list').innerHTML += `<li>${listItem}</li>`;
}