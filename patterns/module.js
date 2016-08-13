'use strict';

const MYAPP = {
  namespace(nmString) {
    let parts = nmString.split('.');
    let self = this;

    parts.reduce((obj, item) => {
      if (!(item in obj)) {
        obj[item] = {};
      }
      return obj[item];
    }, self);

    return self;
  }
};


MYAPP.namespace('utilities.array');

MYAPP.utilities.array = (function() {

  const arrString = '[object Array]';
  const toString  = Object.prototype.toString;

  const inArray = (neendle, haystack) => {
    return haystack.some((item) => item === neendle);
  }

  const isArray = (a) => toString.call(a) === arrString;

  return {
    inArray,
    isArray
  };

}());

console.log(MYAPP.utilities.array.inArray(1, [2,3,1,5]));
console.log(MYAPP.utilities.array.isArray([2,3,1,5]));
