/*

Регулярное выражение для HTML-цветов

Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: первым идёт символ #, и потом – 6 шестнадцатеричных символов.

Пример использования:

let regexp = /...ваше выражение.../

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert( str.match(regexp) )  // #121212,#AA00ef

P.S. В рамках этого задания не нужно искать цвета, записанные в иных форматах типа #123 или rgb(1,2,3).

*/

let regexp = /#[0-9A-F]{6}\b/gi;

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
console.log( str.match(regexp) )  // #121212,#AA00ef