'use strict';

let participantNumber = parseInt(prompt("How many participants?"));
let participantList = [];
for (let i = 0; i < participantNumber; i++) {
  let name = prompt("What is the name of this participant?");
  participantList.push(name);
}
participantList.sort()
for (let listItem of participantList) {
  document.querySelector('#list').innerHTML += `<li>${listItem}</li>`;
}