// // объявили функцию высшего порядка
// const toLearnFrontEnd = function (what, how) {
//   how(what);
// };
// const lang = "javaScript";
// const video = "Webinars";

// // колбэки
// const toRead = function (variable) {
//   console.log(`I learn ${variable}`);
// };
// const toWatch = function (variable) {
//   console.log(`I watch ${variable}`);
// };
// // анонимные колбэк функции
// toLearnFrontEnd("html", () => {
//   console.log("Анонимная колбэк функция");
// });
// // вызываем функцию высшего порядка
// toLearnFrontEnd(lang, toRead);
// toLearnFrontEnd(video, toWatch);

// // абстрагирование повторений

// const repeatFunc = function (count) {
//   let result;
//   for (let i = 0; i <= count; i++) {
//     result = i;
//     console.log(result);
//   }
// };
// repeatFunc(5);

// // фильтрация массива

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
//   { name: "oranges", quantity: 120 },
// ];

// const filterFruits = function (array, cbFunc) {
//   const filterArray = [];
//   for (let element of array) {
//     console.log(element);
//     const ok = cbFunc(element);
//     console.log(ok);
//     if (ok) {
//       filterArray.push(element);
//     }
//   }
//   return console.log(filterArray);
// };
// filterFruits(fruits, (fresh) => fresh.isfresh);
// filterFruits(fruits, (el) => el.quantity > 100);

// function createCounter() {
//   let value = 0;
//   function showValue() {
//     return console.log(value);
//   }
//   function increment() {
//     value++;
//     return console.log(value);
//   }
//   function decrement() {
//     value -= 1;
//   }
//   return { showValue, increment, decrement };
// }
// let counter1 = createCounter();
// let counter2 = createCounter();
// console.log(counter1);
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// counter1.showValue();
// counter2.increment();

// // this

// let name = "Petya";
// const user = {
//   name: "Sasha",
//   toShowName() {
//     console.log(this.name);
//   },
// };
// user.toShowName();
// console.log(user.name);

// // call & apply

// function hello(hotelName, hotelStars) {
//   return console.log(`Hello, ${this.name}, ${hotelName}, ${hotelStars}`);
// }
// hello.call(user, "Hilton", 5);
// hello.apply(user, ["Hilton", 5]);

// function greet(callback) {
//   callback();
// }
// greet(user.toShowName.bind(user));

// const user = {
//   name: "Zakhar",
//   toShowName() {
//     return this.name;
//   },
// };
// console.log(user.toShowName);

// const greeting = function (name, stars) {
//   // для методов call & apply
//   console.log(`Hello ${this.name}, ${name} - ${stars} glad to see you`);
// };
// greeting.call(user, "Hilton", -5);
// greeting.apply(user, ["Hilton", -5]);
// let a = greeting.bind(user, "Hilton", -5);
// a();
// // Bind
// const hello = function (cb) {
//   let userName = cb();
//   console.log(`Hello ${userName}`);
// };
// hello(user.toShowName.bind(user));
