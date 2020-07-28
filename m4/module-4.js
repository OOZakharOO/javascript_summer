// объявили функцию высшего порядка
const toLearnFrontEnd = function (what, how) {
  how(what);
};
const lang = "javaScript";
const video = "Webinars";

// колбэки
const toRead = function (variable) {
  console.log(`I learn ${variable}`);
};
const toWatch = function (variable) {
  console.log(`I watch ${variable}`);
};
// анонимные колбэк функции
toLearnFrontEnd("html", () => {
  console.log("Анонимная колбэк функция");
});
// вызываем функцию высшего порядка
toLearnFrontEnd(lang, toRead);
toLearnFrontEnd(video, toWatch);

// абстрагирование повторений

const repeatFunc = function (count) {
  let result;
  for (let i = 0; i <= count; i++) {
    result = i;
    console.log(result);
  }
};
repeatFunc(5);

// фильтрация массива

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
  { name: "oranges", quantity: 120 },
];

const filterFruits = function (array, cbFunc) {
  const filterArray = [];
  for (let element of array) {
    console.log(element);
    const ok = cbFunc(element);
    console.log(ok);
    if (ok) {
      filterArray.push(element);
    }
  }
  return console.log(filterArray);
};
filterFruits(fruits, (fresh) => fresh.isfresh);
filterFruits(fruits, (el) => el.quantity > 100);
