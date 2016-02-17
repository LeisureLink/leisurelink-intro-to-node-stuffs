'use strict';

//function Person(firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//}
//
//Person.prototype.sayHello = function () {
//  return 'Hey, ' + this.firstName;
//};
//
//
//let person = new Person('Bob', 'Sagot');
//console.log(person);
//
//console.log(person.sayHello());


//let greeter = function (name) {
//  console.log('Hello, ', name);
//};
//
//greeter('Bob');


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return 'Hey, ' + this.firstName;
  }
}

let person = new Person('Bob', 'Sagot');
person.sayHello();

console.log(person);
