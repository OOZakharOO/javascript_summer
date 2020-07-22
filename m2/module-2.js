"use strict";
// // // массивы
// const arr = ["1", "2", "3"];
// console.log(arr);
// console.log("элемент в индексе 0 -", arr[0]);
// console.log("элемент в индексе 1 -", arr[1]);
// console.log("элемент в индексе 2 -", arr[2]);
// console.log("элемент в индексе 3 -", arr[3]);

// arr[0] = "js";
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// // Итерация по массиву

// const numbersArray = [2, 5, 7, 23, 243, 90, 54, 45, 43, 984];
// for (let i = 0; i < numbersArray.length; i++) {
//   console.log(`элемент в индексе ${i} -`, numbersArray[i]);
// }

// for (let i = 0; i < 4; i++) {
//   numbersArray.push("js");
//   console.log(`элемент в индексе ${i} -`, numbersArray[i]);
// }

// for (let elem of numbersArray) {
//   console.log(elem);
// }
// console.log(numbersArray);

// // присвоивание значений
// // значения примитивоф копируются в значение переменной

// let a = 5;
// let b = a;
// console.log("a:", a, "b:", a);

// a = 10;
// console.log("a:", a, "b:", a);

// // значение объектов массивов и копируются по ссылке

// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1;
// console.log(array1 === array2);

// const array3 = array1.slice();
// console.log(array1 === array3);
// console.log(array1, array3);

// array2.push("js");
// console.log(array1, array2, array3);

// array2.unshift("html");
// console.log(array1, array2, array3);

// array3.pop();
// array3.shift();
// console.log(array1, array2, array3);

// // split join
// const strl = "яблоко, апельсин, слива"
// const arr1 = strl.split("");
// console.log(arr1);

// const arr2 = strl.split(",");
// console.log(arr2);

// const newstr = arr1.join(",");
// console.log(newstr);

// console.log(array1.indexOf("js"));
// console.log(array1.indexOf("css"));
// console.log(array1.indexOf(3));

// console.log(array1.includes("js"));
// console.log(array1.includes("css"));

// console.log(array1.includes(3));

// const alArrays = array1.concat(array2).concat(array3);

// const alArrays = array1.concat(array2, array3);

// console.log(alArrays);

// Функция
// Function Expression - нельзя вызывать до объявления

// const func = function (num1, num2) {
//     return num1 + num2;
// };
// console.log(func(2, 3));

// // arrow function - нельзя вызывать до объявления
// const func1 = (a, b) => a - b;
// console.log(func1(9, 8));

// const func2 = (c) => console.log(c);
// func2("Hello world");

// // Function declaration - можно вызывать до объявления

// function decl(par1, par2) {
//     return console.log(par1 * par2);
// }
// decl(3, 4);

// // параметры по умолчанию

// const toBuyProducts = function (product = "milk", count = 1) {
//   return console.log(`I boght ${count} of ${product}`);
// };
// toBuyProducts("bread", 8);
// toBuyProducts(8, "bread");
// toBuyProducts(8);
// toBuyProducts("apple");
// toBuyProducts();

// // псевдомассив argument

// const total = function () {
//   let sum = "0";
//   for (const argument of arguments) {
//     sum += argument;
//   }
//   return sum;
// };
// console.log(total(2, 6));
// console.log(total(7, 89, 8, 5));

// const total1 = (...args) => {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   console.log(total);
// };
// total1(1, 2, 3);

// // преобразование псевдомассива arguments в нормальный массив
// const func3 = function () {
//   const array = [1, 2, 3];
//   console.log("Обычный массив", array);
//   console.log("Псевдомассив", arguments);
//   const newarray = Array.from(arguments);
//   console.log("Преобразованный массив", newarray);
// };
// func3(1, 2, 3);

// // Guard clause

// const addNewUser = function (age) {
//     if (age < 16 || age > 21) {
//         console.log("Мы не можем вас добавить");
//     } else if (age >= 16 && age <= 21) {
//         console.log("Поздравляем, вы студент");
//     } else {
//         console.log("Вы ввели неправильные данные");
//     }
// }

// addNewUser(15);
// addNewUser(32);
// addNewUser(18);
// addNewUser("Hi");


// const addNewUser1 = function (age) {
//   if (age < 16 || age > 21) {
//     return console.log("Мы не можем вас добавить");
//   }

//   if (age >= 16 && age <= 21) {
//     return console.log("Поздравляем, вы студент");
//   }
//   console.log("Вы ввели неправильные данные");
// };

// addNewUser1(15);
// addNewUser1(32);
// addNewUser1(18);
// addNewUser1("Hi");

// // Области видимости

// const firstfunction = function () {
//     console.log("Начала выполнение функция 1");
//     console.log("Закончила выполнение функция 1");
// };

// const socondfunction = function () {
//     console.log("Начала выполнение функция 2");
//     firstfunction();
//     console.log("Закончила выполнение функция 2");
// };

// const thirdfunction = function () {
//     console.log("Начала выполнение функция 3");
//     socondfunction();
//     console.log("Закончила выполнение функция 3");
// };

// const fourthfunction = function () {
//     console.log("Начала выполнение функция 4");
//     thirdfunction();
//     console.log("Закончила выполнение функция 4");
// };
// fourthfunction();

// const mainfunc = function (a, b, c) {
//     (a());
//     (b());
//     (c());
// }
// const toGo = function () {
//     console.log("I'm going");
// }

// const toRun = function () {
//     console.log("I'm running");
// }

// const toJump = function () {
//     console.log("I'm jumping");
// }
// mainfunc(toGo, toRun, toJump)
