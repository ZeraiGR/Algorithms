/*

Поиск HTML-тегов

Создайте регулярное выражение, чтобы найти все (открывающие и закрывающие) HTML-теги с их атрибутами.

Пример использования:

let regexp = /ваше регулярное выражение/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

В этой задаче мы предполагаем, что теги выглядят как <...что угодно...>, и внутри тегов не может быть символов < и > (первый встреченный > закрывает тег).

*/

let regexp = /<[^>]+>/gi;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'