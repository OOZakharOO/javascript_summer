"use strict";
// варианты получения доступа к элементу HTML
// 1 вариант ЧЕРЕЗ ИМЯ ТЕГА
const title = document.querySelector("h1");
title.textContent = "hi";
title.style.color = "blue";
title.style.backgroundColor = "red";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");
// list.classList.toggle("myNewClass")
// list.classList.replace("myNewClass")

const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src =
  "data:image/jpeg;base64,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";
image.width = 250;
image.removeAttribute("width");
// 2 через клас
// const title = document.querySelector(".Main_title");
// const title = document.getElementsByClassName("item");

// 3 через идентификатор
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

// 4 через data-atribute
// const title = document.querySelector('[data-action="action"]');
console.log(title);
console.dir(title);

// Создание элементов
const newLi = document.createElement("li");
newLi.textContent = "4";
console.log(newLi);
list.appendChild(newLi);

// list.append("8, 6, 0")
// list.removeChild(newLi);
newLi.remove();

const beforeList = document.createElement("a");
beforeList.textContent = "1";

const beginList = document.createElement("a");
beginList.textContent = "2";

const endList = document.createElement("a");
endList.textContent = "3";

const afterList = document.createElement("a");
afterList.textContent = "4";

list.style.border = "1px solid";
list.insertAdjacentElement("afterbegin", beginList);
list.insertAdjacentElement("beforebegin", beforeList);
list.insertAdjacentElement("beforeend", endList);
list.insertAdjacentElement("afterend", afterList);

const newImage = image.cloneNode(true);
list.insertBefore(newImage, endList);

const desk = `<h2 style="color:green"> Hello! </h2>`;
list.insertAdjacentHTML("beforeBegin", desk);
console.dir(desk);
console.dir(endList);
// desk.style.color = "green";

list.removeChild(endList);
afterList.remove();

list.innerHTML = "";
list.innerHTML = `<li style="color:blue">1</li> <li>2</li> <li>3</li>`;

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Обработка клика по кнопке");
  console.log(event.type);
  console.log(event.target); // элемент на котором произошло событие
  console.log(event.currentTarget); // элемент на котором сработал обработчик события
  list.style.border = "10px solid red";
});

const form = document.querySelector("form");
const input = document.querySelector(".input");
input.addEventListener("input", () => {
  console.log("Обработка события input");
  console.dir(input.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Обработка события submit");
  console.dir(form);
});

input.addEventListener("focus", () => {
  input.style.backgroundColor = "green";
  console.dir(input);
});

input.addEventListener("blur", () => {
  input.style.border = "2px solid red";
  input.style.backgroundColor = "white";
  console.dir(input);
});

input.addEventListener("change", () => {
  console.dir(input.value);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Произошла загрузка страницы");
});

document.addEventListener("load", () => {
  console.log("Страница загрузилась");
});

document.addEventListener("beforeunload", () => {
  confirm("Вы покидаете страницу");
});

const buttonsList = document.querySelector(".buttons");
buttonsList.style.border = "2px solid";
buttonsList.addEventListener("click", () => {
  console.log(event.target);
  console.log(event.currentTarget);
});

form.addEventListener("input", () => {
  console.log(event.target);
  console.log(event.currentTarget);
  let value = event.target;
  console.log(value.value);
});
