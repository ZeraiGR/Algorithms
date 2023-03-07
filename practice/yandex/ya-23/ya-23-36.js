// Длина кратчайшего пути
// В неориентированном графе требуется найти длину минимального пути между двумя вершинами.

// Формат ввода
// Первым на вход поступает число N – количество вершин в графе (1 ≤ N ≤ 100). Затем записана матрица смежности (0 обозначает отсутствие ребра, 1 – наличие ребра). Далее задаются номера двух вершин – начальной и конечной.

// Формат вывода
// Выведите L – длину кратчайшего пути (количество ребер, которые нужно пройти).
// Если пути нет, нужно вывести -1.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

// Parsing and preparations
let [n, ...rest] = fileContent.trim().split('\n');
n = +n;
let positions = rest.slice(-1);
rest.pop();
let matrix = rest.map(line => [0, ...line.trim().split(' ').map(n => +n)]);
matrix.unshift(new Array(n + 1).fill(0));
positions = positions[0].split(' ').map(n => +n);
let [startPos, finishPos] = positions;
let visited = new Array(n+1).fill(-1);

// Creating linked list
let linkedList = {0: null};

for (let i = 1; i <= n; i++) {
  linkedList[i] = [];
  for (let j = 1; j <= n; j++) {
    if (matrix[i][j] === 1) {
      linkedList[i].push(j);
    }
  }
}

// BFS
let res = -1;

function bfs (grahp, start, finish) {
  let queue = [];
  queue.push(start);
  visited[start] = 0;

  while (queue.length > 0) {
    let now = queue.shift();
    if (!grahp[now]) continue;

    for (const neig of grahp[now]) {
      if (neig === finish) {
        visited[neig] = visited[now] + 1;
        res = visited[now] + 1;
        return;
      }
      if (visited[neig] === -1) {
        visited[neig] = visited[now] + 1;
        queue.push(neig);
      }
    }

  }
}

bfs(linkedList, startPos, finishPos);

if (startPos === finishPos) res = 0;

fs.writeFileSync("output.txt", String(res));