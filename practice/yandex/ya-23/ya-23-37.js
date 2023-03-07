// Путь в графе
// В неориентированном графе требуется найти минимальный путь между двумя вершинами.

// Формат ввода
// Первым на вход поступает число N – количество вершин в графе (1 ≤ N ≤ 100). Затем записана матрица смежности (0 обозначает отсутствие ребра, 1 – наличие ребра). Далее задаются номера двух вершин – начальной и конечной.

// Формат вывода
// Выведите сначала L – длину кратчайшего пути (количество ребер, которые нужно пройти), а потом сам путь. Если путь имеет длину 0, то его выводить не нужно, достаточно вывести длину.
// Необходимо вывести путь (номера всех вершин в правильном порядке). Если пути нет, нужно вывести -1.

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

let res = -1;
let pathArr = new Array(n + 1).fill(-1);

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
        pathArr[neig] = now;
        res = visited[now] + 1;
        return;
      }
      if (visited[neig] === -1) {
        visited[neig] = visited[now] + 1;
        pathArr[neig] = now;
        queue.push(neig);
      }
    }

  }
}

bfs(linkedList, startPos, finishPos);

let ans;

if (startPos === finishPos) {
  ans = '0';
} else if (res !== -1) {
  let resArr = [finishPos];
  let j = finishPos;

  while (j !== startPos) {
    resArr.push(pathArr[j]);
    j = pathArr[j];
  }

  resArr.reverse();

  ans = String(res) + '\n' + resArr.join(' '); 
} else if (res === -1) {
  ans = '-1';
}

fs.writeFileSync("output.txt", ans);