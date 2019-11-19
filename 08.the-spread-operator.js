//  8.The spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); //81

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); //81

//ES6
const sum3 = addFourAges(...ages); //spread operator is used in the function call
console.log(sum2); //81

const familySmith = ['John', 'Jane', 'Mark'];
const familySmith = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familySmith];
console.log(bigFamily); //["John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann"]

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; //h is not a nodelist

Array.from(all).forEach(cur => cur.style.color = 'purple'); //Change de h1 and text boxes to purple.