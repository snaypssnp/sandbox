'use strict';

/* Example 1 */
function Universe1() {
  if (typeof Universe1.instance === 'object') {
    return Universe1.instance;
  }

  this.name = 'Попов Сергей';

  Universe1.instance = this;
}

var uni1 = new Universe1();
var uni2 = new Universe1();
console.log(uni1 === uni2);

/* Example 2 */
function Universe2() {
  var instance;

  Universe2 = function Universe2() {
    return instance; //первый раз будет  return undefined;
  };

  Universe2.prototype = this; //если есть прототип перед созданием первого объекта

  instance = new Universe2();

  instance.constructor = Universe2;

  instance.name = 'Василий Пупкин';

  return instance;
}

console.log(uni1 === uni2);


/* Example 3 */

var Universe = (function() {
  var instance;


  return function Universe() {
    if (!(this instanceof Universe)) { //without new
      return new Universe();
    }
    if (instance) {
      return instance;
    }

    instance = this;

    this.name = 'Василий Пупкин';
  }
}());


