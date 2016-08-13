'use strict';

var MYAPP = {};

MYAPP.namespace = function(nmString) {
  var parts = nmString.split('.');
  var self = this;
  
  for (var i = 0; i < parts.length; i++) {
    if (typeof self[parts[i]] === 'undefined') {
      self[parts[i]] = {};
    } 
    self = self[parts[i]];
  }
  
  return self;
}

MYAPP.namespace('utilities.array');

MYAPP.utilities.array = (function() {

  var arrString = '[object Array]';
  var toString  = Object.prototype.toString;

  return {
    inArray: function (neendle, haystack) {

      for (var i = 0, max = haystack.length; i < max; i++) {
        if (haystack[i] === neendle) {
          return true;
        }
      }
      return false;
    },
    isArray: function(a) {
      return toString.call(a) === arrString;
    }
  }
}());

console.log(MYAPP.utilities.array.inArray(1, [2,3,1,5]));
console.log(MYAPP.utilities.array.isArray([2,3,1,5]));
