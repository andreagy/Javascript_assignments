'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i of names) {
  document.querySelector("#target").innerHTML += `<li>${i}</li>`;
}