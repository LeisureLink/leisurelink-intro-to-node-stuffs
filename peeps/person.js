'use strict';

let Address = require('./address');

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return 'Hey, ' + this.firstName;
  }
}

module.exports = Person;
module.exports.Address = Address;
