// Постфиксная запись
// В постфиксной записи (или обратной польской записи) операция записывается после двух операндов. Например, сумма двух чисел A и B записывается как A B +. Запись B C + D * обозначает привычное нам (B + C) * D, а запись A B C + D * + означает A + (B + C) * D. Достоинство постфиксной записи в том, что она не требует скобок и дополнительных соглашений о приоритете операторов для своего чтения.

// Формат ввода
// В единственной строке записано выражение в постфиксной записи, содержащее цифры и операции +, -, *. Цифры и операции разделяются пробелами. В конце строки может быть произвольное количество пробелов.

// Формат вывода
// Необходимо вывести значение записанного выражения.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const operations = fileContent.trim().split(' ');

const stack = [];

for (let i = 0; i < operations.length; i++) {
  let cur = operations[i];
  if (cur === '+' || cur === '-' || cur === '*') {
    let firstValue = +stack.pop();
    let secondValue = +stack.pop();
    let res = calc(secondValue, firstValue, cur);
    stack.push(res);
  } else {
    stack.push(cur);
  }
}

function calc(n1, n2, operation) {
  if (operation === '+') {
    return n1 + n2;
  } else if (operation === '-') {
    return n1 - n2;
  } else if (operation === '*') {
    return n1 * n2;
  }
}

let res = stack.pop();

fs.writeFileSync("output.txt", String(res));