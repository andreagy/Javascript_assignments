'use strict';

let startyear = +prompt("Give me the start year!");
let endyear = +prompt("Give me the end year!");

for (let year = startyear; year <= endyear; year++) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    let stringYear = year.toString()
    document.querySelector('#list').innerHTML += `<li>${stringYear}</li>`;
  }
}

