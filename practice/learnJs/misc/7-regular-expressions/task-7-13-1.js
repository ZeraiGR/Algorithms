/*

Найдите языки программирования

Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.

Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:

let regexp = /ваше регулярное выражение/флаги;

alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C

*/

let regexp = /Java(Script)?|PHP|C(\+\+)?/gi;

console.log("Java JavaScript PHP C++ C".match(regexp)); 
// Java JavaScript PHP C++ C