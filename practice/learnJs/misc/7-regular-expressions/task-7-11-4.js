/*

Разобрать выражение

Арифметическое выражение включает два числа и оператор между ними. Например:

1 + 2
1.2 * 3.4
-3 / -6
-2 - 2

Оператором может быть: "+", "-", "*" или "/".

В выражении могут быть пробелы в начале, в конце или между частями выражения.

Создайте функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов:

1. Первое число.
2. Оператор.
3. Второе число.

Например:

let [a, op, b] = parse("1.2 * 3.4");

alert(a); // 1.2
alert(op); // *
alert(b); // 3.4

*/

function parse(expr) {
  let iter = expr.trim().matchAll(/(?<first_operant>-?\d+(?:\.?\d+){0,1})\s+(?<operator>[-+*/])\s+(?<second_operant>-?\d+(?:\.?\d+){0,1})/g);

  return [first_operand, operator, second_operand] = Object.entries(iter.next().value.groups).map(([, val]) => val);
}

let [a, op, b] = parse("2 + 3.4 ");

console.log(a);
console.log(op);
console.log(b);

