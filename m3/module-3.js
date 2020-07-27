"use strict";

// объекты

// const ok = {
//     key_1: "value",
//     key_2: 30,
//     key_3: true,
//     toShowKeys() {
//         console.log(this.key_1, this.key_2, this.key_3, this.key_4);
//     }
// };
// console.log(ok);
// console.log(ok.key_1);
// console.log(ok.key_2);
// console.log(ok.key_3);
// ok.toShowKeys();
// ok.key_1 = "JavaScript";
// ok.toShowKeys();
// ok.key_4 = 1;
// ok.toShowKeys();
// delete ok.key_4
// ok.toShowKeys();

// const allValues = Object.values(ok);
// console.log("Преобразовать свойство в массив значений", allValues);


// const allEntries = Object.entries(ok);
// console.log("Преобразовать свойство в массив пар, ключ - значение", allEntries);

// for (let elem of allEntries) {
//     // console.log(elem);
//     console.log(`${elem[0]}: ${elem[1]}`);
// }

// // операции rest, spred

// const numbers = [1, 2, 3, 4, 5];
// let min = Math.min(1, 2, 3, 4, 5);
// console.log(min);
// min = Math.min(...numbers)
// console.log(min);

// const newNumbersArray = [...numbers];
// console.log(newNumbersArray);
// newNumbersArray.pop();
// console.log(newNumbersArray);
// console.log("Исходный массив", numbers);

// // роспыление объекта

// const strawberry = {
//     name: "strawberry",
// }

// const bananas = {
//     name: "bananas",
// }

// const coctail = Object.assign({}, bananas, strawberry)
// console.log(coctail);

// const newCoctail = {
//     ...strawberry, ...bananas
// }
// console.log(newCoctail);

// function toDoCoctail(...args) {
//     console.log(args);
// }
// toDoCoctail(1, 2, 3)
// toDoCoctail(1, 2, 3, 4, 5)
// toDoCoctail()

// function toGetData(emeil, ...args) {
//     console.log(emeil);
//     console.log(args);
// }
// toGetData("123@gmail.com", 1, 2, 3)
// toGetData("123@gmail.com", 1, 2)
// toGetData("123@gmail.com", 1, 2, 3, 4, 5)

// // деструктуризация объекта

// const user = {
//     name: "Zakhar",
//     age: 13,
//     colorEye: "brown",
// }
// console.log(user);
// console.log(user.name, user.age, user.colorEye);
// const {name: userName, age, colorEye, newAge = 14} = user;
// console.log(userName, age, colorEye, newAge);
// console.log(user);

// // деструктуризация массивов

// const fruts = [["bananas", "oranges", "kiwi"], ["apples", "strawbarrys", "cherry"]]
// console.log(fruts[0]);
// console.log(fruts[1]);
// const [tropical, regional] = fruts;

// console.log(tropical);
// console.log(regional);