'use strict';

let Person = require('./person');
let Address = Person.Address;

let bob = new Person('bob', 'sagot');

console.log(bob);