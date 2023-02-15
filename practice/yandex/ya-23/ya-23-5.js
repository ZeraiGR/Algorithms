// Хорошая строка

// На день рождения маленький Ипполит получил долгожданный подарок — набор дощечек с написанными на них буквами латинского алфавита. Теперь-то ему будет чем заняться долгими вечерами, тем более что мама обещала подарить ему в следующем году последовательность целых неотрицательных чисел, если он хорошо освоит этот набор. Ради такого богатства Ипполит готов на многое.

// Прямо сейчас юный исследователь полностью поглощён изучением хорошести строк. Хорошестью строки называется количество позиций от 1 до L - 1 (где L — длина строки), таких, что следующая буква в строке является следующей по алфавиту. Например, хорошесть строки "abcdefghijklmnopqrstuvwxyz" равна 25, а строки "abdc" — только 1.

// Ипполит размышляет над решением закономерно возникающей задачи: чему равна максимально возможная хорошесть строки, которую можно собрать, используя дощечки из данного набора? Вы-то и поможете ему с ней справиться.

// Формат ввода

// Первая строка ввода содержит единственное целое число N — количество различных букв в наборе (1 ≤ N ≤ 26). Обратите внимание: в наборе всегда используются N первых букв латинского алфавита.
// Следующие N строк содержат целые положительные числа ci — количество букв соответствующего типа (1 ≤ ci ≤ 10^9). Таким образом, первое число означает количество букв "a", второе число задаёт количество букв "b" и так далее.

// Формат вывода
// Выведите единственное целое число — максимально возможную хорошесть строки, которую можно собрать из имеющихся дощечек.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const [n, ...counter] = fileContent.trim().split('\n').map(n => +n.trim());

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let map = new Map();
for (let i = 0; i < counter.length; i++) map.set(alphabet[i], counter[i]);

let ans = 0;

function calcMax (arr) {
  if (arr.length <= 1) return;

  let stack = [];
  stack.push(arr);

  while (stack.length) {
    console.log(stack);
    console.log('---------');
    let curArr = stack.shift();
    if (curArr.length <= 1) continue;

    let min = Math.min(...curArr.map(([l, cnt]) => cnt));
    ans += (curArr.length - 1) * min;

    curArr = curArr.map(([l, cnt]) => [l, cnt -= min]).map(([l, cnt]) => {
      if (cnt === 0) {
        return null;
      } else {
        return [l, cnt];
      }
    });

    let hasArrDiv = curArr.some(el => el === null);

    if (hasArrDiv) {
      let chunks = splitToChunks(curArr);      
      stack.push(...chunks);
    } else {
    }
    
  }
}

calcMax([...map.entries()]);

function splitToChunks (arr) {
  let res = [];
  let curArr = [];

  arr.forEach((el) => {
    if (el === null) {
      if (curArr.length) res.push(curArr);
      curArr = [];
    } else {
      curArr.push(el);
    }
  });

  if (curArr.length) res.push(curArr);

  return res;
}

fs.writeFileSync("output.txt", String(ans));