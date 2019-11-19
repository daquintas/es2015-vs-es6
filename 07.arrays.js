//  7.Arrays

const boxes = document.querySelectorAll('.box');

//ES2015
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.background = 'dodgerblue';
});

//ES6
const boxesArr6 = Arr.from(boxes);
boxesArr6.forEach(cur => cur.style.background = 'dodgerblue');

//ES2015
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
  }

  boxesArr5[i].textContent = 'I changed to blue';
}

// I changed to blue
// I'm blue
// I changed to blue

for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    break;
  }

  boxesArr5[i].textContent = 'I changed to blue';
}

// I changed to blue
// I'm blue
// I'm orange

//ES6

for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue';
}

// I changed to blue
// I'm blue
// I changed to blue


//ES2015

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full); //[false, false,false, true, false, false]
console.log(full.indexOf(true)); //3
console.log(ages[full.indexOf(true)]); //21

//ES6
console.log(ages.findIndex(cur => cur >= 18)); //3
console.log(ages.find(cur => cur >= 18)); //21