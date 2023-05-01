/*

Проверка, целое ли число

Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false

*/

function isInteger (num) {
  return num == (num ^ 0);
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));