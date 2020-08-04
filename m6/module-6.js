"use strict";

// const num1 = [4, 9, 78];
// const num2 = [0, 48, 5];
// const num3 = [8, 3, 1];

// const dirtyFunction = function (array, value) {
//   for (let i = 0; i < array.langth; i++) {
//     return (array[i] *= value);
//   }
// };
// console.log(dirtyFunction(num1, 3));
// console.log(num1);
// console.log(dirtyFunction(num2, 0));
// console.log(dirtyFunction(num3, 2));

// const pureFunction = function (array, value) {
//   const arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(array[i] * value);
//   }
//   return arr;
// };
// console.log(pureFunction(num1, 5));
// console.log(num1);

// // перебирающие методы массива
// // array.method(callback(value, index, array));

// // метод forEach - ничего не возвращает, только перебирает, альтернатива циклу for
// num1.forEach((num) => console.log(num));
// num1.forEach((num) => {
//   num += 1;
//   return console.log(num);
// });

// console.log(num1);

// // метод map трансформирует массив, изменяет массив,
// // возвращает новый массив из изменённых елементов исходного массива
// console.log(
//   num1.map((num) => {
//     return (num *= 10);
//   })
// );
// console.log(num1.map((num) => (num *= 10)));
// console.log(num1);

// // метод filter применяет функцию каждому элементу массива
// // возвращает новый массив который  из элементов исходногомассива
// // которые соотведствуют условию

// console.log(num1.filter((num) => num % 2 === 0));

// // find возвращает один уникальный элемент массива
// console.log(num1.find((num) => num % 2 === 0));

// // every возвращает булевый true или false если все элементы прошли проверку
// console.log(num1.every((num) => num % 2 === 0));

// // some возвращает булевый true или false если один элемент прошёл проверку
// console.log(num1.some((num) => num % 2 === 0));

// // sort сортирует элементы по алфавиту
// console.log(num1.sort());
// console.log(num1.sort((a, b) => a - b));
// console.log(num1.sort((a, b) => b - a));

// const words = ["apple", "pear", "phone", "cat", "appLICATION", "absolute"];
// console.log(words.sort());
// console.log(words.reverse());

// redusce

// array.method(callback[(acc, value, index, array)]);
// console.log(num1.reduce((acc, num) => acc + num, 0));
// console.log(
//   num1
//     .reduce((acc, num) => {
//       let element = num + 101;
//       acc.push(element) + num;
//       return acc;
//     }, [])
//     .sort()
// );

