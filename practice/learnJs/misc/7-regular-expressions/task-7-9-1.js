/*

Как найти многоточие "..." ?

Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).

Проверьте его:

let regexp = /ваше выражение/g;
alert( "Привет!... Как дела?.....".match(regexp) ); // ..., .....

*/

let regexp = /\.{3,}/g;
console.log( "Привет!... Как дела?.....".match(regexp) ); // ..., .....