// Задание 1
// let name = "Генератор защитного поля";
// let price = "1000";

// price = "2000";

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Задание 2

// const total = 100;
// const ordered = 479;

// if (total >= ordered) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
//     alert("Заказ оформлен, с вами свяжется менеджер"); // от меня
// } else {
//     console.log("На складе недостаточно товаров!");
//     alert("На складе недостаточно товаров!"); // от меня
// };

// Задание 3

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// let userPassword = prompt("Введите пароль");

// if (userPassword === null) {
//     message = 'Отменено пользователем!';
// } else if (userPassword === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// };

// alert(message);

// Задание 4

// let credits = 23580;
// let pricePerDroid = 3000;
// let droids = +prompt("К-во Дроидов");
// let totalprice;

// if (droids === 0) {
//   alert("Отменено пользователем!");
// } else {
//   totalprice = droids * pricePerDroid;
//   if (credits >= totalprice) {
//     credits = credits - totalprice;
//     alert(
//       `Вы купили ${droids} дроидов, на счету осталось ${credits} кредитов.`
//     );
//   } else if (totalprice > credits) {
//     alert("Недостаточно средств на счету!");
//   } else {
//     alert("Неправильный формат ввода");
//   }
// }

// Задание 5

// let country = prompt("Введите страну доставки");
// country = country.toUpperCase();

// switch (country) {
//   case "КИТАЙ":
//     alert("Доставка в Китай будет стоить 100 кредитов");
//     break;
//   case "ЧИЛИ":
//     alert("Доставка в Чили будет стоить 250 кредитов");
//     break;
//   case "АВСТРАЛИЯ":
//     alert("Доставка в Австралию будет стоить 170 кредитов");
//     break;
//   case "ИНДИЯ":
//     alert("Доставка в Индию будет стоить 80 кредитов");
//     break;
//   case "ЯМАЙКА":
//     alert("Доставка в Ямайку будет стоить 120 кредитов");
//     break;
//   default:
//     alert("В вашей стране доставка не доступна");
//     break;
// };

// Задание 6

// let input = prompt("Введите число");
// let total = 0;

// while (input !== 0) {
// input = +prompt("Введите число");
// total = total + input;
// console.log(total);
// };
// alert(total);