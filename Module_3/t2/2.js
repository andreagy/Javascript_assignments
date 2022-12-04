'use strict';

const ul = document.querySelector('#target');
const listItem1 = document.createElement('li');
listItem1.innerText = "First item";
const listItem2 = document.createElement('li');
listItem2.innerText = "Second item";
const listItem3 = document.createElement('li');
listItem3.innerText = "Third item";

ul.appendChild(listItem1);
ul.appendChild(listItem2);
ul.appendChild(listItem3);

listItem2.setAttribute('class', 'my-item');


