'use strict';

const t = document.querySelector("#trigger")
t.addEventListener('mouseover', function(evt) {
  const pic = document.getElementById('target');
  pic.src = 'img/picB.jpg';
});

t.addEventListener('mouseout', function(evt) {
  const pic = document.getElementById('target');
  pic.src = 'img/picA.jpg';
});
