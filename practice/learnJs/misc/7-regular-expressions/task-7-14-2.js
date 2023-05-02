/*

Вставьте после фрагмента

У нас есть строка с HTML-документом.

Напишите регулярное выражение которое вставляет <h1>Hello</h1> сразу же после тега <body>. У тега могут быть атрибуты.

Например:

let regexp = /ваше регулярное выражение/;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str = str.replace(regexp, `<h1>Hello</h1>`);

После этого значение str:

<html>
  <body style="height: 200px"><h1>Hello</h1>
  ...
  </body>
</html>

*/

let regexp = /(?<=<body.*?>)/;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str = str.replace(regexp, `<h1>Hello</h1>`);
str = str.replace(/<body.*?>/, '$&<h1>Hello</h1>');

console.log(str);

