//  2.blocks - IIFEs

//ES2015
(function() {
  var c = 3;
})();

console.log(c); //c is not defined (functional scope)

//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(a + b); //scope error: a b
console.log(c); //3