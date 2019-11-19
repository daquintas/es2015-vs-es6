//  6.Destructuring

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name); //works fine.
console.log(age); //works fine.

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

const {
  firstName,
  LastName
} = obj;

console.log(firstName); //works fine.
console.log(lastName); //works fine.

const {
  firstName: a,
  lastName: b
} = obj;

console.log(a); //works fine.
console.log(b); //works fine.


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1996);
console.log(age); //works fine.
console.log(retirement); //works fine.