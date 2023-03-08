// Блохи
// На клеточном поле, размером NxM (2 ≤ N, M ≤ 250) сидит Q (0 ≤ Q ≤ 10000) блох в различных клетках. "Прием пищи" блохами возможен только в кормушке - одна из клеток поля, заранее известная. Блохи перемещаются по полю странным образом, а именно, прыжками, совпадающими с ходом обыкновенного шахматного коня. Длина пути каждой блохи до кормушки определяется как количество прыжков. Определить минимальное значение суммы длин путей блох до кормушки или, если собраться блохам у кормушки невозможно, то сообщить об этом. Сбор невозможен, если хотя бы одна из блох не может попасть к кормушке.

// Формат ввода
// В первой строке входного файла находится 5 чисел, разделенных пробелом: N, M, S, T, Q. N, M - размеры доски (отсчет начинается с 1); S, T - координаты клетки - кормушки (номер строки и столбца соответственно), Q - количество блох на доске. И далее Q строк по два числа - координаты каждой блохи.

// Формат вывода
// Содержит одно число - минимальное значение суммы длин путей или -1, если сбор невозможен.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

// Parsing and preparations
let [data, ...coords] = fileContent.trim().split('\n');

let [N, M, S, T, Q] = data.split(' ').map(n => +n);
coords = coords.map(c => c.trim().split(' ').map(n => +n));

let res = 0;

let matrix = [];
for (let i = 0; i < N; i++) matrix.push([-2, ...new Array(M).fill(-1)]);
matrix.unshift(new Array(M + 1).fill(-2));

for (const coord of coords) {
  let sum = bfs([S, T], coord);
  if (sum === -1) {
    res = -1;
    break;
  }
  res += sum;
}

function bfs (start, finish) {
  let [x1, y1] = start;
  let [x2, y2] = finish;
  
  matrix[x1][y1] = 0;

  if (matrix[x1][y1] === matrix[x2][y2]) return 0;

  let queue = [];
  queue.push({val: 0, coords: start});

  while (queue.length > 0) {
    let now = queue.shift();
    let neighbors = getNeighbors(now.coords, matrix);

    for (const neig of neighbors) {
      if (neig.val === - 1) {
        neig.val = now.val + 1;
        let [x, y] = neig.coords;
        matrix[x][y] = now.val + 1;
        queue.push(neig);
      }
    }
  }

  return matrix[x2][y2];
}

function getNeighbors(coords, matrix) {
  let [x, y] = coords;
  let neighbors = [];

  if (x-2 >= 0) {
    if (y-2 >= 0) {
      neighbors.push({val: matrix[x-1][y-2], coords: [x-1, y-2]});
      neighbors.push({val: matrix[x-2][y-1], coords: [x-2, y-1]});
    } else if (y-1 >= 0) {
      neighbors.push({val: matrix[x-2][y-1], coords: [x-2, y-1]});
    }

    if (y+2 <= M) {
      neighbors.push({val: matrix[x-1][y+2], coords: [x-1, y+2]});
      neighbors.push({val: matrix[x-2][y+1], coords: [x-2, y+1]});
    } else if (y+1 <= M) {
      neighbors.push({val: matrix[x-2][y+1], coords: [x-2, y+1]});
    }

  } else if (x-1 >= 0) {
    if (y-2 >= 0) neighbors.push({val: matrix[x-1][y-2], coords: [x-1, y-2]});
    if (y+2 <= M) neighbors.push({val: matrix[x-1][y+2], coords: [x-1, y+2]});
  }

  if (x+2 <= N) {
    if (y+2 <= M) {
      neighbors.push({val: matrix[x+1][y+2], coords: [x+1, y+2]});
      neighbors.push({val: matrix[x+2][y+1], coords: [x+2, y+1]});
    } else if (y+1 <= M) {
      neighbors.push({val: matrix[x+2][y+1], coords: [x+2, y+1]});
    }

    if (y-2 >= 0) {
      neighbors.push({val: matrix[x+1][y-2], coords: [x+1, y-2]});
      neighbors.push({val: matrix[x+2][y-1], coords: [x+2, y-1]});
    } else if (y-1 >= 0) {
      neighbors.push({val: matrix[x+2][y-1], coords: [x+2, y-1]});
    }

  } else if (x+1 <= N) {
    if (y-2 >= 0) neighbors.push({val: matrix[x+1][y-2], coords: [x+1, y-2]});
    if (y+2 <= M) neighbors.push({val: matrix[x+1][y+2], coords: [x+1, y+2]});
  }

  return neighbors;
}

fs.writeFileSync("output.txt", String(res));