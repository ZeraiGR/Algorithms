// Самый дешевый путь

// В каждой клетке прямоугольной таблицы N × M записано некоторое число. Изначально игрок находится в левой верхней клетке. За один ход ему разрешается перемещаться в соседнюю клетку либо вправо, либо вниз (влево и вверх перемещаться запрещено). При проходе через клетку с игрока берут столько килограммов еды, какое число записано в этой клетке (еду берут также за первую и последнюю клетки его пути).
// Требуется найти минимальный вес еды в килограммах, отдав которую игрок может попасть в правый нижний угол.

// Формат ввода
// Вводятся два числа N и M — размеры таблицы (1 ≤ N ≤ 20, 1 ≤ M ≤ 20). 
// Затем идет N строк по M чисел в каждой — размеры штрафов в килограммах за прохождение через соответствующие клетки (числа от 0 до 100).

// Формат вывода
// Выведите минимальный вес еды в килограммах, отдав которую можно попасть в правый нижний угол.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, ...kilos] = fileContent.trim().split('\n');

kilos = kilos.map(k => k.trim().split(' ').map(n => +n));

kilos.map(kilo => kilo.unshift(0));
let k = +n.split(' ')[0];
let m = +n.split(' ')[1];
let arr = new Array(k).fill(0);
kilos.unshift(arr);

let rest = [];

for (let i = 0; i < k; i++) {
  rest.push(new Array(m + 1).fill(Infinity));
}

let dp = [new Array(m + 1).fill(Infinity), ...rest];
dp[0][0] = 0;
dp[0][1] = 0;
dp[1][0] = 0;


for (let i = 1; i <= k; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + kilos[i][j];
  }
}

let res = dp[dp.length - 1][dp[dp.length - 1].length - 1];

fs.writeFileSync("output.txt", String(res));