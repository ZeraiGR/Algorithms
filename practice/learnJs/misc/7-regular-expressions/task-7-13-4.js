/*

Найдите весь тег

Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать весь тег: он может как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">.

…Но регулярное выражение не должно находить <styler>!

Например:

let regexp = /ваше регулярное выражение/g;

alert( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">

*/

let regexp = /<style(\s\w+="(\w|\.)*")*>/g;
let regexp2 = /<style(>|\s.*?>)/g;

console.log( '<style> <styler> <style test="...">'.match(regexp) );