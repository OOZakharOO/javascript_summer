"use strict";
// console.log("Интерпретатор");
// console.log("Переводит");
// console.log("код");
// console.log("в");
// console.log("язык");
// console.log("понятный");
// console.log("машине");
// let sum;
// console.log(sum);// undefined
// sum = 2 + 3;
// console.log(sum);
// console.log(typeof sum);// number
// sum = "2" + 3;
// console.log(sum);
// sum = "2" + "3";
// console.log(typeof sum);// string
// sum = false;
// console.log(typeof sum);// boolean

// // взаимодействие с пользователем

// // const greet = alert("Hi");
// // console.log(greet);// undefined

// // const ask = confirm("Hi?");
// // console.log(ask);// true or false

// // const enter = prompt("Enter you temperature please");
// // console.log(enter);

// // основные операторы
// console.log(10%5); //0

// console.log(666%5); // 1

// console.log(23%5); //3

// console.log(14%5);// 4

// console.log(5%5);// 0

// console.log(0%0);// NaN - not a number

// console.log(2**3);
// console.log(2**2);
// console.log(2**1);

// // операторы сравнения
// console.log(false==0);// true - это не строгое равенство происходит логическое преобразование типов
// console.log(false===0); // false - строгое равенсво

// console.log(false!=0); // false - не строгое неравенсво
// console.log(false!==0);// true - строгое неравенсво

// // приведение к числу
// console.log(+"5");             // 5
// console.log(+"false");         // NaN
// console.log(Number("5"));             // 5
// console.log(Number("false"));  // NaN
// console.log(Number("true"));   // NaN

// console.log(Number(false));    // 0
// console.log(Number(true));     // 1

// console.log(Number(null));     // 0
// console.log(Number(undefined));// NaN

// // приведение к строке
// console.log(5 + "");// 5
// console.log(5 + 5 + "");//10
// console.log(5 + "" + 5 + 3);//55

// // проверка на число
// console.log(isNaN(5)); // false
// console.log(isNaN("5")); // false
// console.log(isNaN(true)); // false
// console.log(isNaN("Hallo!")); // true

// console.log(0.1 + 0.2);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// // методы объекта math
// console.log(Math.floor(7.1));
// console.log(Math.ceil(7.1));
// console.log(Math.round(7.4));
// console.log(Math.round(7.5));

// console.log(Math.min(2, 6 , 3, 43));//2
// console.log(Math.max(2, 6 , 3, 43));//43

// console.log(Math.random());
// console.log(Math.round(Math.random() * (555 - 55) + 55));

// Вветвления
// let weather = prompt("Kakayha pogoda?");
// let goodWeather = "solnechno";
// let badWeather = "rainy";

// if (weather === goodWeather) {
//     console.log("YA POIDU NA PLYAJ");
// } else if (weather === badWeather) {
//     console.log("POIDU V KAFE");
// } else {
//     console.log("Ostanus doma")
// };

// let day = prompt("vvedite den nedely");

// if (day === "PN") {
//     console.log("eto budni den")
// } else if (day === "WT") {
//     console.log("eto budni den")
// } else if (day === "SR") {
//     console.log("eto budni den")
// } else if (day === "CHT") {
//     console.log("eto budni den")
// } else if (day === "PT") {
//     console.log("eto budni den")
// } else if (day === "SB") {
//     console.log("eto wyhodnoi den")
// } else if (day === "ND") {
//     console.log("eto wyhodnoi den")
// } else {
//     console.log("vvedite den nedely")
// };

// if (day === "PN" || day === "WT" || day === "SR" || day === "CHT" || day === "PT") {
//     console.log("eto budni den")
// } else if (day === "SB" || day === "ND") {
//     console.log("eto wyhodnoi den")
// } else {
//     console.log("vvedite den nedely")
// };

// let age = +prompt("enter your age");

// if (age > 16 && age < 18) {
//     console.log("DOSTUP ROZRESHEN");
// } else {
//     console.log("DOSTUP ZAPRECSHEN");
// };

// console.log(typeof age);
// console.log(age);

// switch (day) {
//     case "PN":
//         console.log("eto budni den");
//     break;
//     case "WT":
//         console.log("eto budni den");
//     break;
//     case "SR":
//         console.log("eto budni den");
//     break;
//     case "CHT":
//         console.log("eto budni den");
//     break;
//     case "PT":
//         console.log("eto budni den");
//     break;
//     case "SB":
//         console.log("eto wyhodnoi den");
//     break;
//     case "ND":
//         console.log("eto wyhodnoi den");
//     break;
//     default:
//         console.log("vvedite den nedely");
//     break;
// };

// day = day.toUpperCase();

// switch (day) {
//     case "PN":
//     case "WT":
//     case "SR":
//     case "CHT":
//     case "PT":
//         console.log("eto budni den");
//         break;
//     case "SB":
//     case "ND":
//         console.log("eto wyhodnoi den");
//         break;
//     default:
//         console.log("vvedite den nedely");
//         break;
// };

// // Циклы
// let а = 11;
// // сначала проверяет условие, если оно выполняется, то выполняет код в теле цыкла
// while (а <= 10) {
//     // цикл делает проверку условия
//     а += 2;
//     console.log("Сообщение", а);
// };

// а = 20;

// исполнит тело цикла хотя бы один раз перед проверкой условия
// do {
//     а += 2;
//     console.log("Сообщение", а);
// } while (а <= 10)

// цикл со счётчиком
// (1: нач. значение локальной переменной; 2: условие: 3: шаг итерации)


// for (let i = 1; i <= 9; i += 3) {
//     console.log(i);
// };

// if (let i = 2; i <= 20; i += 3) {
//     for (i === 14) {
//         break;
//     };
//     console.log(i);
// };

// for (let i = 2; i <= 20; i += 3) {
//     if (i === 14) {
//         continue;
//     };
//     console.log(i);
// };


// Задание 1
    // let name = "Генератор защитного поля";
    // let price = "1000";

    // price = "2000";

    // console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);


// Задание 2

    // const total = 100;
    // const ordered = 40;

    // if (total >= ordered) {
    //     console.log("Заказ оформлен, с вами свяжется менеджер");
    //     alert("Заказ оформлен, с вами свяжется менеджер"); // от меня
    // } else {
    //     console.log("На складе недостаточно товаров!");
    //     alert("На складе недостаточно товаров!"); // от меня
    // };

// Задание 3

    // const ADMIN_PASSWORD = 'jqueryismyjam';
    // let message;

    // prompt("Введите пароль");

    // if (ADMIN_PASSWORD) {
    //     message = 'Отменено пользователем!';
    // } else if (ADMIN_PASSWORD = ADMIN_PASSWORD) {
    //     message = 'Добро пожаловать!';
    // } else {
    //     message = 'Доступ запрещен, неверный пароль!';
    // };

    // alert(`${message}`);

// Задание 4

    // let credits = 23580;
    // let pricePerDroid = 3000;
    // let droids = prompt("К-во Дроидов");
    // let totalprice;

    // if (droids = false) {
    //     console.log('Отменено пользователем!');
    // } else {
    //     totalprice = `${droids} * ${pricePerDroid}`;
    // };

    // if (totalprice > credits) {
    //     console.log('Недостаточно средств на счету!');
    // } else if (totalprice <= credits) {
    //     credits = `${credits} - ${totalprice}`;
    // };

    // Задание 5

    let country = prompt("Введите страну доставки");
    
    country = country.toUpperCase();
    switch (country) {
    case "Китай":
        console.log(100);
    break;
    case "Чили":
        console.log(250);
    break;
    case "Австралия":
        console.log(170);
    break;
    case "Индия":
        console.log("80 кредитов");
    break;
    case "Ямайка":
        console.log("120 кредитов");
    break;
    };