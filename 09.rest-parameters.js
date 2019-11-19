//  9.Rest Parameters

//ES5
function isFullAge5() {
  //console.log(arguments); [1990, 1999, 1965]
  var argsArr = Arr.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2019 - cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965); //true true true

//ES6
function isFullAge6(...years) { //rest parameters are used in the function declaration
  years.forEach(cur => console.log((2019 - cur) >= 18)); //true true true
}

isFullAge6(1990, 1999, 1965);

//ES5
function isFullAge5(limit) {
  var argsArr = Arr.prototype.slice.call(arguments, 1); //we exclude the limit argument
  //console.log(argsArr); [1990, 1999, 1965]
  argsArr.forEach(function(cur) {
    console.log((2019 - cur) >= limit); // true true true
  });
}

isFullAge5(16, 1990, 1999, 1965); //true true true

//ES6
function isFullAge6(limit, ...years) { //rest parameters are used in the function declaration
  years.forEach(cur => console.log((2019 - cur) >= limit)); //true true true
}

isFullAge6(16, 1990, 1999, 1965);