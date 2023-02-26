// Сумма в прямоугольнике
// Вам необходимо ответить на запросы узнать сумму всех элементов числовой матрицы N×M в прямоугольнике с левым верхним углом (x1, y1) и правым нижним (x2, y2)

// Формат ввода
// В первой строке находится числа N, M размеры матрицы (1 ≤ N, M ≤ 1000) и K — количество запросов (1 ≤ K ≤ 100000). Каждая из следующих N строк содержит по M чисел`— элементы соответствующей строки матрицы (по модулю не превосходят 1000). Последующие K строк содержат по 4 целых числа, разделенных пробелом x1 y1 x2 y2 — запрос на сумму элементов матрице в прямоугольнике (1 ≤ x1 ≤ x2 ≤ N, 1 ≤ y1 ≤ y2 ≤ M)

// Формат вывода
// Для каждого запроса на отдельной строке выведите его результат — сумму всех чисел в элементов матрице в прямоугольнике (x1, y1), (x2, y2)

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const data = fileContent.trim().split('\n').map(line => line.trim().split(' ').map(el => +el));

function findPrefixSums (arr) {
  const prefixSum = new Array(arr.length + 1).fill(0);
  for (let i = 1; i < arr.length + 1; i++) prefixSum[i] = arr[i-1] + prefixSum[i-1];
  return prefixSum;
}

const n = data[0][0];
const m = data[0][1];
const k = data[0][2];
const matrix = [];

for (let i = 0; i < n; i++) {
  let line = [];
  for (let j = 0; j < data[i+1].length; j++) {
    line.push(data[i+1][j]);
  }
  matrix.push(line);
  line = [];
}

const prefixSum1D = new Array(n);
for (let i = 0; i < n; i++) prefixSum1D[i] = new Array(m).fill(0);

for (let i = 0; i < n; i++) {
  prefixSum1D[i] = findPrefixSums(matrix[i]);
}

const prefixSum2D = new Array(n + 1);

for (let i = 0; i < prefixSum2D.length; i++) {
  prefixSum2D[i] = new Array(m + 1).fill(0);
}

for (let j = 1; j <= m; j++) {
  for (let i = 0; i < n; i++) {
    prefixSum2D[i+1][j] = prefixSum2D[i][j] + prefixSum1D[i][j];
  }
}

let res = [];

for (let i = 0; i < k; i++) {
  const [x1, y1, x2, y2] = data[n + 1 + i];
  let sum = prefixSum2D[x2][y2] - prefixSum2D[x1 - 1][y2] - prefixSum2D[x2][y1 - 1] + prefixSum2D[x1 - 1][y1 - 1];
  res.push(sum);
}

fs.writeFileSync("output.txt", res.join('\n'));