//  4.Arrow Functions: Basics

const years = [1990, 1965, 1982, 1937];

//ES2015
var age5 = years.map(function(el) {
  return 2019 - el;
});

console.log(ages5); //[29, 54, 37, 82]

//ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6); //[29, 54, 37, 82]

ages6 = years.map((el, index) => `Age Element ${index +1}: ${2019 - el}.`);
console.log(ages6); //[Age Element 1: 29, Age Element 2: 54, Age Element 3: 37, Age Element 4: 82]

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age Element ${index +1}: ${age}.`;
});

console.log(ages6);