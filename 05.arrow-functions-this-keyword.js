//  5.Arrow Functions: Lexical 'this' keyword

//ES2015
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

box5.clickMe(); //error: 'this' points to the window object because the callback function is a regular function instead of a box5 function.

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

box5.clickMe(); //works fine.

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

box6.clickMe(); //works fine.

const box6 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

box6.clickMe(); //position and color undefined because in this case 'this' points to the window object.


function Person(name) {
  this.name = name;
}

//ES2015
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  });
  console.log(arr); //Name is not defined. The callback function points to the window object.
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr); //works fine.
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends);


//ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr); //works fine.
};

new Person('John').myFriends6(friends);