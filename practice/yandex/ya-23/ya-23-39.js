// Путь спелеолога
// Пещера представлена кубом, разбитым на N частей по каждому измерению (то есть на N3 кубических клеток). Каждая клетка может быть или пустой, или полностью заполненной камнем. Исходя из положения спелеолога в пещере, требуется найти, какое минимальное количество перемещений по клеткам ему требуется, чтобы выбраться на поверхность. Переходить из клетки в клетку можно, только если они обе свободны и имеют общую грань.

// Формат ввода
// В первой строке содержится число N (1 ≤ N ≤ 30). Далее следует N блоков. Блок состоит из пустой строки и N строк по N символов: # - обозначает клетку, заполненную камнями, точка - свободную клетку. Начальное положение спелеолога обозначено заглавной буквой S. Первый блок представляет верхний уровень пещеры, достижение любой свободной его клетки означает выход на поверхность. Выход на поверхность всегда возможен.

// Формат вывода
// Вывести одно число - длину пути до поверхности.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

// Parsing and preparations
let [n, ...surfaces] = fileContent.trim().split('\n');

n = +n;
surfaces = surfaces.map(s => s.trim()).filter(s => s !== '');
let matrix = [];
let curArr = [];
let cnt = 0;
let startPos;

for (let i = 0; i < surfaces.length; i++) {
  let line = surfaces[i];
  if (cnt < n) {
    curArr.push(line);
  } else {
    matrix.push(curArr);
    curArr = [];
    cnt = 0;
    curArr.push(line);
  }
  cnt += 1;
}
matrix.push(curArr);

let techFirstMatrix = [];
for (let i = 0; i <= n; i++) techFirstMatrix.push(new Array(n+1).fill(-2));

matrix = matrix.map((stage, si) => {
  return [new Array(n+1).fill(-2), ...stage.map((line, li) => [-2, ...line.split('').map((s, zi) => {
    if (s === '#') {
      return -2;
    } else if (s === '.') {
      return -1;
    } else {
      startPos = [si + 1, li + 1, zi + 1];
      return 0;
    }
  })])]
});

matrix.unshift(techFirstMatrix);

// -------------------------------------
let res = 0;

// BFS
function bfs (matrix, start) {
  let queue = [];
  queue.push({val: 0, coords: start});
  
  while (queue.length > 0) {
    let now = queue.shift();
    let neighbors = getNeighbors(matrix, now.coords);

    for (const neig of neighbors) {
      if (neig.val === -1) {
        neig.val = now.val + 1;
        let [z, i, j] = neig.coords;
        matrix[z][i][j] = now.val + 1;
        queue.push(neig);
      }
    }
  }
}

function getNeighbors(matrix, coords) {
  let [a, b, d] = coords;
  let neighbors = [];
  let possibilities = {
    "0": {val: matrix[a - 1][b][d], coords: [a - 1, b, d]},
    "1": {val: matrix[a][b - 1][d], coords: [a, b - 1, d]},
    "2": {val: matrix[a][b][d - 1], coords: [a, b, d - 1]},
  };
  
  for (let i = 0; i < 3; i++) {
    neighbors.push(possibilities[i]);
  }

  if (a < n) {
    neighbors.push({val: matrix[a + 1][b][d], coords: [a + 1, b, d]});
  }

  if (b < n) {
    neighbors.push({val: matrix[a][b + 1][d], coords: [a, b + 1, d]});
  }

  if (d < n) {
    neighbors.push({val: matrix[a][b][d + 1], coords: [a, b, d + 1]});
  }

  return neighbors;
}

bfs(matrix, startPos);

let arr = [];
for (const line of matrix[1]) {
  for (const val of line) {
    if (val > 0) arr.push(val); 
  }
}

res = Math.min(...arr);

fs.writeFileSync("output.txt", String(res));
