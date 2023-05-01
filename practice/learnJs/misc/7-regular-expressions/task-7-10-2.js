/*

Поиск HTML-комментариев

Найти все HTML-комментарии в тексте:

let regexp = /ваше регулярное выражение/g;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

*/

let regexp = /<!--.*?-->/gis;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log(str.match(regexp));