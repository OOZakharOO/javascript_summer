"use strict";
// // процедурный код

// const name = "Zakhar";
// const age = "13";
// function greet(name, age) {
//   console.log(`${name} is ${age} years old`);
// }

// greet(name, age);

// // объектно ориентированный подход

// const user = {
//   name: "Zakhar",
//   age: 13,
//   greet() {
//     console.log(`${this.name} is ${this.age} years old`);
//   },
// };
// user.greet();

// // Функции конструкторы

// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`${this.name} is ${this.age} years old`);
//   };
// };

// // Все методы для объектов нужно записывать в свойство prototype функции конструкторы
// User.prototype.toShowName = function () {
//   console.log(this.name);
// };
// const user1 = new User("Zakhar", 13);
// const user2 = new User("Noname", 50);
// user1.greet();
// user2.greet();
// user1.toShowName();
// user2.toShowName();
// console.log(user1);
// console.log(user2);

// // ES6 Классы
// class NewUser {
//   static className = "user";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   toShowName() {
//     console.log(this.name);
//   }
//   updateName(val1 = "", val2 = 0, val3 = "Happy") {
//     console.log((this.name = val1));
//     console.log((this._age = val2));
//     console.log(val3);
//   }
  // get & sets
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     return (this._age = value);
//   }
// }
// const classUser = new NewUser("Noname2", 51);
// console.log(classUser);

// classUser.updateName("Zakhar", 13, "Hi");
// classUser.updateName();
// classUser.updateName(null, 30, null);
// console.log(classUser.age);
// // classUser.age(20);
// console.log((classUser.age = 40));
// console.log(classUser.age);

// console.log(NewUser.className);

// // Наследование

// class SuperNewUser extends NewUser {
//   constructor(name, age, superName, superAge) {
//     super(name, age);
//     this.superName = superName;
//     this.superAge = superAge;
//   }
//   toGreet() {
//     console.log("Привет");
//   }
// }

// const newSuperUser = new SuperNewUser("Zakhar2", 13, "1", 2);
// console.log(newSuperUser);
