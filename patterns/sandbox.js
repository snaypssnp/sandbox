/* Шаблон изолированного пространства имен */

function Sandbox () {
  var args = Array.prototype.slice.call(arguments);
  var callback = args.pop();

  var modules = (args[0] && typeof args[0] === 'string') ? args : args[0];
  
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  this.a = 1;
  this.b = 2;

  if (!modules || modules === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  for (var i = 0; i < modules.length; i++) {
    Sandbox.modules[modules[i]](this);
  }

  callback(this);
}

new Sandbox('dom', 'event', function(box) {
  Sandbox('ajax', function(box) {

  });
});

Sandbox.modules = {};

Sandbox.modules.dom = function(box) {
  box.getElement = function() {};
  box.getStyle = function() {};
  box.foo = 'bar';
};

Sandbox.modules.event = function() {
  box.attachEvent = function() {};
  box.detachEvent = function() {};
};

Sandbox.modules.ajax = function(box) {
  box.makeRequest = function() {};
  box.getResponse = function() {};
}
