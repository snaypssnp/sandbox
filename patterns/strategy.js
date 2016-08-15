'use strict';

var validator = {
  types: {},

  messages: [],

  config: {},

  validate: function (data) {
    var type, checker, result, msg;
    this.messages = [];

    for (var i in data) {
      if (!data.hasOwnProperty(i)) {
        continue;
      }

      type = this.config[i];
      if (!type) {
        continue;
      }

      checker = this.types[type];
      if (!checker) {
        throw {
          name: 'ValidatorError',
          message: 'No handler to validate type ' + type
        }
      }

      result = checker.validate(data[i]);
      if (!result) {
        msg = 'Invalid value for ' + i + '*, ' + checker.instructions;
        this.messages.push(msg);
      }
    }
    return this.hasErrors();
  },
  hasErrors: function() {
    return this.messages.length != 0;
  }
};

validator.types.isNonEmpty = {
  validate: function (value) {
    return value !== '';
  },
  instructions: 'the value cannot be empty'
}

validator.types.isNumber = {
  validate: function(value) {
    return !isNaN(value);
  },
  instructions: 'the value can only be a valid number, e.g. 1, 3.14, or 2010'
}

validator.types.isAlphaNum = {
  validate: function(value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: 'the value can only contain characters and numbers no special symbol'
}

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
};

var data = {
  first_name: 'Sergey',
  last_name: 'Popov',
  age: 'unknown',
  username: 'o_O'
};

validator.validate(data);

if (validator.hasErrors()) {
  console.log(validator.messages.join('\n'));
}
