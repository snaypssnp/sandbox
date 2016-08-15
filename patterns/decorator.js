'use strict';

function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function () {
  return this.price;
}

Sale.prototype.decorate = function (decorate) {
  var F = function() {};
  var overrides = this.constructor.decorators[decorate];
  var newObj;

  F.prototype = this;

  newObj = new F();
  newObj.uber = F.prototype;

  for (var prop in overrides) {
    if (overrides.hasOwnProperty(prop)) {
      newObj[prop] = overrides[prop];
    }
  }

  return newObj;
}


Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function() {
    var price  = this.uber.getPrice();
    price += price * 5 /100;
    return price;
  }
};

Sale.decorators.quebec = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 7.5 / 100;
    return price;
  }
}

Sale.decorators.money = {
  getPrice: function() {
    return '$' + this.uber.getPrice().toFixed(2);
  }
}

Sale.decorators.cdn = {
  getPrice: function() {
    return 'CDN$ ' +  this.uber.getPrice().toFixed(2);
  }
}

var sale = new Sale(250);

sale = sale.decorate('fedtax');
sale = sale.decorate('money');
console.log(sale.getPrice());