'use strict';

function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function () {
  return this.price;
}

Sale.prototype.decorator = function(type) {
  var decorator = Sale.decorators[type];
  var F = function() {};
  var newObj;
  F.prototype = this;
  newObj = new F();
  newObj.uber = this;
  for (var prop in decorator) {
    newObj[prop] = decorator[prop];
  }
  
  return newObj;
}
Sale.decorators = {};
Sale.decorators.money = {
  getPrice: function() {
    return '$' + this.uber.getPrice();
  }
}

var sale = new Sale(450);
sale = sale.decorator('money');


console.log(sale.getPrice())
