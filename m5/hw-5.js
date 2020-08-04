"use strict";

// task 1

// const Account = function ({login, email}) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com\

// task 2

// class User {
//   constructor({name, age, followers}) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// // task 3

// class Storage {
//   constructor({ items }) {
//     this.items = items;
//     console.log(items);
//   }

//   getItems() {
//     return storage;
//   }
//   addItem(item) {}
//   removeItem(item) {}
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// // task 4

// class StringBuilder {
//   constructor({ string }) {
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     builder = str + this._value;
//     return builder;
//   }
//   prepend(str) {}
//   pad(str) {}
// }

// let builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder._value); // '.^'

// builder.prepend("^");
// console.log(builder._value); // '^.^'

// builder.pad("=");
// console.log(builder._value); // '=^.^='

// Task 6

// class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
  
//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor() {}
  
//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
  
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {}
  
//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {}
  
//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {}
  
//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {}
  
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {}
//   }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000