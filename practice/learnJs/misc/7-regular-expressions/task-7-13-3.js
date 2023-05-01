/*

Найдите строки в кавычках

Создайте регулярное выражение для поиска строк в двойных кавычках "...".

Важно, что строки должны поддерживать экранирование с помощью обратного слеша, по аналогии со строками JavaScript. Например, кавычки могут быть вставлены как \", новая строка как \n, а сам обратный слеш как \\.

let str = "Как вот \"здесь\".";

В частности, обратите внимание: двойная кавычка после обратного слеша \" не оканчивает строку.

Поэтому мы должны искать от одной кавычки до другой, игнорируя встречающиеся экранированные кавычки.

В этом и состоит основная сложность задачи, которая без этого условия была бы элементарной.

Примеры подходящих строк:

.. "test me" ..
.. "Скажи \"Привет\"!" ... (строка с экранированными кавычками)
.. "\\" ..  (внутри двойной слеш)
.. "\\ \"" ..  (внутри двойной слеш и экранированная кавычка)

В JavaScript приходится удваивать обратные слеши, чтобы добавлять их в строку, как здесь:

let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

эта строка в памяти:
alert(str); //  .. "test me" .. "Скажи \"Привет\"!" .. "\\ \"" ..

*/

const regexp = /"(\\.|[^"\\])*"/g;

let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

let iter = str.matchAll(regexp);

for (const el of iter) {
  console.log(el);
}