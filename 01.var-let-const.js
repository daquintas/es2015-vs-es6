//  1.Var vs let vs const

//ES2015
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); //Jane Miller

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //error: constant variable

//ES2015
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + "," + yearOfBirth); //John,1990
}

//ES6
function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1990;
  }
  console.log(firstName + "," + yearOfBirth); //Error: firstName and yearOfBirth out of scope.
}

//ES2015
var i = 23;
for (var i = 0; i < 5 < i++) {
  console.log(i); //0 1 2 3 4
}
console.log(i); //23 (non block)

//ES6
let i = 23;
for (let i = 0; i < 5 < i++) {
  console.log(i); //0 1 2 3 4
}
console.log(i); //23