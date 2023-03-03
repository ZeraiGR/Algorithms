// Гвоздики
// В дощечке в один ряд вбиты гвоздики. Любые два гвоздика можно соединить ниточкой. Требуется соединить некоторые пары гвоздиков ниточками так, чтобы к каждому гвоздику была привязана хотя бы одна ниточка, а суммарная длина всех ниточек была минимальна.

// Формат ввода
// В первой строке входных данных записано число N — количество гвоздиков (2 ≤ N ≤ 100). В следующей строке заданы N чисел — координаты всех гвоздиков (неотрицательные целые числа, не превосходящие 10000).

// Формат вывода
// Выведите единственное число — минимальную суммарную длину всех ниточек.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, coords] = fileContent.trim().split('\n');
n = +n;
coords = coords.split(' ').map(n => +n).sort((a,b) => a - b);
let res;

if (n === 2) {
  res = coords[1] - coords[0];
} else {
  let dp = [coords[1] - coords[0], coords[2] - coords[0]];
  for (let i = 2; i < n - 1; i++) {
    dp[i] = Math.min(dp[i - 2] + coords[i+1] - coords[i], dp[i - 1] + coords[i+1] - coords[i]);
  }

  res = dp[dp.length - 1];
}

fs.writeFileSync("output.txt", String(res));