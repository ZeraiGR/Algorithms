/*

Найти цвет в формате #abc или #abcdef

Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef. То есть: # и за ним 3 или 6 шестнадцатеричных цифр.

Пример использования:

let regexp = /ваш шаблон/g;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert( str.match(regexp) ); // #3f3 #AA00ef

P.S. Это должно быть ровно 3 или 6 шестнадцатеричных цифр. При этом значения с 4-мя цифрами типа #abcd не должны совпадать в результат.

*/

let regexp = /#([0-9a-f]{6}|[0-9a-f]{3})\b/gi;
let regexp2 = /#([a-f0-9]{3}){1,2}\b/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str.match(regexp) ); // #3f3 #AA00ef