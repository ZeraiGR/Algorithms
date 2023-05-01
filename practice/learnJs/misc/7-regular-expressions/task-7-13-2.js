/*

Найдите пары BB-кодов

BB-код имеет вид [tag]...[/tag], где tag– это один из: b, url или quote.

Например:
[b]текст[/b]
[url]http://ya.ru[/url]

BB-коды могут быть вложенными. Но сам в себя тег не может быть вложен, например:

Возможно:
[url] [b]http://ya.ru[/b] [/url]
[quote] [b]текст[/b] [/quote]

Не может быть:
[b][b]текст[/b][/b]

Теги могут содержать переносы строк, это допустимо:

[quote]
  [b]текст[/b]
[/quote]

Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.

Например:

let regexp = /ваше регулярное выражение/флаги;

let str = "..[url]http://ya.ru[/url]..";
alert( str.match(regexp) ); // [url]http://ya.ru[/url]

Если теги вложены, то нужно искать самый внешний тег (при желании можно продолжить поиск в его содержимом):

let regexp = /ваше регулярное выражение/флаги;

let str = "..[url][b]http://ya.ru[/b][/url]..";
alert( str.match(regexp) ); // [url][b]http://ya.ru[/b][/url]

*/

let regexp = /\[(b|url|quote)].*?\[\/\1]/sg;

let str = "..[url]http://ya.ru[/url]..";
console.log( str.match(regexp) ); // [url]http://ya.ru[/url]

let str2 = `
  [b]привет![/b]
  [quote]
    [url]http://ya.ru[/url]
  [/quote]
`;
console.log( str2.match(regexp) ); // [url][b]http://ya.ru[/b][/url]