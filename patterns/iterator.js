'use strict';

var agg = (function() {
  var index = 0;
  var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var length = data.length;
  return {
    next: function() {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index += 2;
      return element;
    },

    hasNext: function() {
      return index < length;
    },

    rewind: function() {
      index = 0;
    },

    current: function() {
      return data[index];
    }
  }
} ());

while(agg.hasNext()) {
  console.log(agg.next());
}

agg.rewind();
agg.next();
console.log(agg.current());