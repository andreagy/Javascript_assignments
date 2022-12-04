'use strict';

const firstname = document.querySelector('input[name=firstname]');
const lastname = document.querySelector('input[name=lastname]');

const form = document.querySelector('#source');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  document.querySelector('#target').innerHTML = `Your name is ${firstname.value} ${lastname.value}`;
});
