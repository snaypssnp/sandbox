'use strict';

/* реализация классического наследования в es5 */

var klass = function (Parent, props) {
  var Child, F, i;

  Child = function() {
    if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
      Child.uber.__construct.apply(this, arguments);
    }

    if (Child.prototype.hasOwnProperty('__construct')) {
      Child.prototype.__construct.apply(this, arguments);
    }
  }

  Parent = Parent || Object;

  F = function () {};

  F.prototype = Parent.prototype;

  Child.prototype = new F();

  Child.uber = Parent.prototype;

  Child.prototype.constructor = Child;

  for (i in props) {
    if (props.hasOwnProperty(i)) {
      Child.prototype[i] = props[i];
    }
  }

  return Child;
}

var Man = klass(null, {
  __construct: function (what) {
    console.log("Man's constructor");
    this.name = what;
  },

  getName: function() {
    return this.name;
  }
});

var first = new Man('Adam');
console.log(first.getName());
