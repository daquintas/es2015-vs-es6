//  3.Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  var now = new Date();
  return now.getFullYear() - year;
}

//ES2015
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.'); //works fine

//ES6
console.log(`This is  ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`); //works fine

const n = `${firstName}${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.startsWith('j')); //false

console.log(n.endsWith('th')); //true
console.log(n.startsWith('Sm')); //false

console.log(n.includes(' ')); //true
console.log(firstName.repeat(2)); //JohnJohn
console.log(`${firstName} `.repeat(2)); //John John