'use strict';

function add(x, y) {

  if (typeof y === 'undefined') {
    return function (y) {
      return x + y;
    }
  }

  return x + y;
}

console.log(add(5, 7));
console.log(add(9)(8));

function schonfinkelize(fn) {
  var slice = Array.prototype.slice;
  var storedArgs = slice.call(arguments, 1);

  return function() {
    var newArgs = slice.call(arguments);
    var args = storedArgs.concat(newArgs);

    return fn.apply(null, args);
  }
}

var sum = schonfinkelize(function(a, b, c) {
  return a + b + c;
}, 2, 4)(5);

console.log(sum);
