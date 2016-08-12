'use strict';

var myFunc = function (a, b, c) {
  var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments, 0, 3));
  var result;

  if (!myFunc.cache[cacheKey]) {

    result = a * b * c;

    myFunc.cache[cacheKey] = result;
  }

  return myFunc.cache[cacheKey];
};

myFunc.cache = {};

myFunc(2, 3, 4);
myFunc(1, 3, 4);

console.log(myFunc.cache);
