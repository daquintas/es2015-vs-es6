//  10. Default Parameters

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName; //only if lastName is undefined
  nationality === undefined ? nationality = 'american' : nationality = nationality; //only if nationality is undefined

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john); //John Smith 1990 american

var Emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(Emily); //Emily 1983 Diaz spanish

//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
console.log(john); //John Smith 1990 american

var Emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(Emily); //Emily 1983 Diaz spanish