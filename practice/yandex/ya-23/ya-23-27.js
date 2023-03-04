// Вывести маршрут максимальной стоимости

// В левом верхнем углу прямоугольной таблицы размером N × M находится черепашка. В каждой клетке таблицы записано некоторое число. Черепашка может перемещаться вправо или вниз, при этом маршрут черепашки заканчивается в правом нижнем углу таблицы.
// Подсчитаем сумму чисел, записанных в клетках, через которую проползла черепашка (включая начальную и конечную клетку). Найдите наибольшее возможное значение этой суммы и маршрут, на котором достигается эта сумма.

// Формат ввода
// В первой строке входных данных записаны два натуральных числа N и M, не превосходящих 100 — размеры таблицы. Далее идет N строк, каждая из которых содержит M чисел, разделенных пробелами — описание таблицы. Все числа в клетках таблицы целые и могут принимать значения от 0 до 100.

// Формат вывода
// Первая строка выходных данных содержит максимальную возможную сумму, вторая — маршрут, на котором достигается эта сумма. Маршрут выводится в виде последовательности, которая должна содержать N-1 букву D, означающую передвижение вниз и M-1 букву R, означающую передвижение направо. Если таких последовательностей несколько, необходимо вывести ровно одну (любую) из них.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, ...sum] = fileContent.trim().split('\n');

sum = sum.map(k => k.trim().split(' ').map(n => +n));

sum.map(kilo => kilo.unshift(0));
let k = +n.split(' ')[0];
let m = +n.split(' ')[1];
let arr = new Array(k).fill(0);
sum.unshift(arr);

let rest = [];

for (let i = 0; i < k; i++) {
  rest.push(new Array(m + 1).fill(0));
}

let dp = [new Array(m + 1).fill(0), ...rest];
dp[0][0] = 0;
dp[0][1] = 0;
dp[1][0] = 0;

for (let i = 1; i <= k; i++) {
  for (let j = 1; j <= m; j++) {
    let direction = [dp[i-1][j], dp[i][j-1]];
    let max = Math.max(...direction);
    dp[i][j] = max + sum[i][j];
  }
}

let res = dp[dp.length - 1][dp[dp.length - 1].length - 1];

let cur = res;
let directions = [];
let i = dp.length - 1;
let j = dp[dp.length - 1].length - 1;

while (cur > 0) {
  let rest = cur - sum[i][j];
  if (dp[i-1][j] === rest) {
    cur = rest;
    i -= 1;
    directions.push('D');
  } else if (dp[i][j-1] === rest) {
    cur = rest;
    j -= 1;
    directions.push('R');
  }
}

directions.pop();
directions.reverse();

if (res === 0) {
  for(let i = 0; i < k - 1; i++) {
    directions.push('D');
  }
  for (let i = 0; i < m - 1; i++) {
    directions.push('R');
  }
}

fs.writeFileSync("output.txt", String(res) + '\n' + directions.join(' '));