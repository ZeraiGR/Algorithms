/*

Найдите неотрицательные целые

Есть строка с целыми числами.

Создайте регулярное выражение, которое ищет только неотрицательные числа. Ноль разрешён.

Пример использования:

let regexp = /ваше регулярное выражение/g;

let str = "0 12 -5 123 -18";

alert( str.match(regexp) ); // 0, 12, 123

*/

let regexp = /\b(?<!-)\d+/g;
let regexp2 = /(?<![-\d])\d+/g;

let str = "0 12 -5 123 -18";

console.log( str.match(regexp) ); // 0, 12, 123