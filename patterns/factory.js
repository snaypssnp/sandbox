'use strict';

function CarMaker() {};

CarMaker.prototype.drive = function () {
  return 'Vroom, I have ' +  this.doors + ' doors';
}


CarMaker.factory = function (type) {

  if (typeof CarMaker[type] !== 'function') {
    throw {
      name: 'Error',
      message: type + ' doesn\'t exit'
    }
  }

  /*
    мне кажется, так будет лучше
   //!(CarMaker.Compact.prototype instanceof CarMaker)
    */
  if (typeof CarMaker[type].prototype.drive !== 'function') {
    CarMaker[type].prototype = new CarMaker();
  }

  return new CarMaker[type];
}

CarMaker.Compact = function() {
  this.doors = 4;
}

CarMaker.Convertible = function() {
  this.doors = 2;
}

CarMaker.SUV = function() {
  this.doors = 24;
}

var corolla     = CarMaker.factory('Compact');
var solstice    = CarMaker.factory('Convertible');
var cherokee    = CarMaker.factory('SUV');

console.log(corolla.drive());
console.log(solstice.drive());
console.log(cherokee.drive());
