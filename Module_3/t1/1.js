'use strict';

const textList = ["First item", "Second item", "Third item"];

for (let i of textList) {
  document.querySelector("#target").innerHTML += `<li>${i}</li>`;
}
