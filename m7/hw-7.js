// task 1

const list = document.querySelector("#categories");
// console.dir(list);
// console.log(list.children.length);
// console.log(list.children[0].children[0].textContent);

const array = list.children;
console.log(array);
for (let elem of array) {
  console.log(
    `${elem.children[0].textContent}: ${elem.children[1].children.length}`
  );
  //   console.log(elem.children[1].children.length);
  //   console.log(elem.children[1].children.length);
}

// Task 2

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientList = document.getElementById("ingredients");
console.log(ingredientList);
for (const ingredient of ingredients) {
  //   ingredient = document.createElement("li");
  //   ingredient.textContent = ingredients.child;
  //   ingredientList.prepend(ingredient);
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  ingredientList.appendChild(elem);
}

// Taks 3

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");
console.log(gallery);
for (let img of images) {
  const image = `<img src="${img.url}" class="img">`;
  gallery.insertAdjacentHTML("afterbegin", image);
}

// task 4

const div = document.querySelector("#counter");
const val = document.querySelector("#value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const decrement = function () {
  console.log(counterValue);
  // val.text.ContentcounterValue;
  return (counterValue -= 1);
};

const increment = function () {
  console.log(counterValue);
  // val.textContent.counterValue;
  return (counterValue += 1);
};
buttonDec.addEventListener("click", () => {
  if (val.textContent >= 1) {
    decrement();
    val.textContent = counterValue;
  }
});
buttonInc.addEventListener("click", () => {
  increment();
  val.textContent = counterValue;
});

// task 5

const input = document.getElementById("name-input");
const title = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  console.log(input.value);
  title.textContent = input.value;
  if (input.value === "") {
    title.textContent = "незнакомец";
  }
});

// Task 6

let input1 = document.getElementById("validation-input");
let length = +input1.getAttribute("data-length");

input1.onchange = function () {
  if (input1.value.length === length) {
    input1.classList.remove("invalid");
    input1.classList.add("valid");
    // console.log(1);
  }
  if (input1.value.length === 0) {
    input1.classList.remove("valid");
    input1.classList.remove("invalid");
    // console.log(2);
  }
  if (input1.value.length !== length && input1.value.length !== 0) {
    input1.classList.add("invalid");
    // console.log(3);
  }
};

// task 7

const input2 = document.getElementById("font-size-control");
const fontSizeControlText = document.getElementById("text");

console.dir(fontSizeControlText.style);

input2.addEventListener("input", (event) => {
  fontSizeControlText.style.fontSize = input2.value + "px";
  console.dir(input2.value);
});
