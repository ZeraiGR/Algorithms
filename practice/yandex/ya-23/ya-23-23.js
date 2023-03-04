// Калькулятор

// Имеется калькулятор, который выполняет следующие операции:
// - умножить число X на 2;
// - умножить число X на 3;
// - прибавить к числу X единицу.

// Определите, какое наименьшее количество операций требуется, чтобы получить из числа 1 число N.

// Формат ввода
// Во входном файле написано натуральное число N, не превосходящее 10^6.

// Формат вывода
// В первой строке выходного файла выведите минимальное количество операций. Во второй строке выведите числа, последовательно получающиеся при выполнении операций. Первое из них должно быть равно 1, а последнее N. Если решений несколько, выведите любое.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let n = +fileContent.trim();
let dp = new Array(n+1).fill(0);
dp[0] = null;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

let oper = new Array(n).fill(0);
oper[0] = null;
oper[1] = null;
oper[2] = 2;
oper[3] = 0;

for (let i = 4; i <= n; i++) {
  let isDividedByTwo = i % 2 === 0 ? dp[Math.trunc(i / 2)] : Infinity;
  let isDividedByThree = i % 3 === 0 ? dp[Math.trunc(i / 3)] : Infinity;
  let variants = [isDividedByThree + 1, isDividedByTwo + 1, dp[i-1] + 1]
  let min = Math.min(...variants);
  let minIndex = variants.indexOf(min);
  dp[i] = min;
  oper[i] = minIndex;
} 

let arr = new Array(n).fill(0);
let cur = n;
let j = 0;

while (cur > 0) {
  arr[j] = cur;
  let operation = oper[cur];
  if (operation === 0) {
    cur /= 3;
  } else if (operation === 1) {
    cur /= 2;
  } else {
    cur -= 1;
  }
  j += 1;
}

arr = arr.filter(n => n !== 0).reverse();
let res = dp[n];

fs.writeFileSync("output.txt", String(res) + '\n' + arr.join(' '));