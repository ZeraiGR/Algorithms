/*

Проверьте MAC-адрес

MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных чисел, разделённых двоеточиями.

Например: '01:32:54:67:89:AB'.

Напишите регулярное выражение, которое проверит, является ли строка MAC-адресом.

let regexp = /ваш regexp/;

alert( regexp.test('01:32:54:67:89:AB') ); // true

alert( regexp.test('0132546789AB') ); // false (нет двоеточий)

alert( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)

alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)

*/

let regexp = /^([0-9A-F][0-9A-F]:){5}[0-9A-F]$/i;

console.log( regexp.test('01:32:54:67:89:AB') ); // true
console.log( regexp.test('0132546789AB') ); // false (нет двоеточий)
console.log( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
console.log( regexp.test('01:32:54:67:89:ZZ') ); // false (ZZ в конце строки)