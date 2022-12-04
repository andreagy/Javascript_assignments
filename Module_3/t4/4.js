'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const s = document.getElementById('target');
for (const student of students) {
  const temp = document.createElement('option');
  temp.innerHTML = student["name"]
  temp.value = student["id"]
  s.appendChild(temp)
}

