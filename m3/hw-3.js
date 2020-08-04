"use strict";

// // task 1

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const allKeys = Object.keys(user);

// for (let key of allKeys) {
//     console.log(`${key[key]}: ${key[key]}`);
// }

// // task 2

// const countProps = function(obj) {
//     const allKeys = Object.keys(obj);
//     return allKeys.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // task 3

// const findBestEmployee = function (employees) {
//     const keys = Object.keys(employees);
//     const values = Object.values(employees);
//     let count = 0;
//     let employee;
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] > count) {
//         employee = keys[i];
//         count = values[i];
//       }
//     }
//     return employee;
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     })
//   ); // lorence

//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     })
//   ); // mango

//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     })
//   ); // lux

// // task 4

// const countTotalSalary = function (employees) {
//     let total = 0;
//     //   1 variant
//       const a = Object.values(employees);
//       for (let key of a) {
//         total += key;
//       }

//     //   2 variant
//     for (let key in employees) {
//       total += employees[key];
//     }
//     return total;
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countTotalSalary({})); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     })
//   ); // 330

//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     })
//   ); // 400

// // task 5

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const item of arr) {
//     let value = item[prop];
//     if (value != undefined) {
//       values.push(value);
//     }
//   }
//   return values;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// task 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   // Перебрать полученный массив
//   let total = 0;
//   for (let product of allProducts) {
//     // console.log(product);
//     for (let key in product) {
//       if (product[key] === productName) {
//         total = product.price * product.quantity;
//       }
//     }
//   }
//   return total;
// };

// /*
//   Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

