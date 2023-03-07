// Поиск цикла

// Дан неориентированный граф. Требуется определить, есть ли в нем цикл, и, если есть, вывести его.

// Формат ввода
// В первой строке дано одно число n — количество вершин в графе ( 1 ≤ n ≤ 500 ). Далее в n строках задан сам граф матрицей смежности.

// Формат вывода
// Если в иcходном графе нет цикла, то выведите «NO». Иначе, в первой строке выведите «YES», во второй строке выведите число k — количество вершин в цикле, а в третьей строке выведите k различных чисел — номера вершин, которые принадлежат циклу в порядке обхода (обход можно начинать с любой вершины цикла). Если циклов несколько, то выведите любой.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, ...matrix] = fileContent.trim().split('\n');

n = +n;
matrix = matrix.map(line => [0, ...line.split(' ').map(n => +n)]);
let linkedList = {0: null};
let visited = new Array(n+1).fill(0);

matrix.unshift(new Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  linkedList[i] = [];
  for (let j = 1; j <= n; j++) {
    if (matrix[i][j] === 1) {
      linkedList[i].push(j);
    }
  }
}


let cycleStart = null;
let cycleArr = [];
let isFinished = false;
let curPrev = null;

for (let i = 1; i <= n; i++) {
  if (visited[i] === 0) {
    dfs(linkedList, visited, i);
  }
}

function dfs (grahp, visited, now, prev = null) {
  if (!grahp[now]) return;

  visited[now] = 1;

  for (const neig of grahp[now]) {
    if (visited[neig] === 1 && neig !== prev) { 
      if (cycleStart === null) cycleStart = neig;
      break;
    } else if (visited[neig] === 0) {
      dfs(grahp, visited, neig, now);
    }
  }


  if (cycleStart !== null && !isFinished ) {
    if (curPrev === null || curPrev === now) {
      cycleArr.push(now);
      curPrev = prev;
    }
    if (now === cycleStart) isFinished = true;
  }
  visited[now] = 2;
}

let cycleLength = cycleArr.length;
let res;

if (cycleLength > 0) {
  res = 'YES' + '\n' + cycleLength + '\n' + cycleArr.join(' ') + '\n';
} else {
  res = 'NO';
}

fs.writeFileSync("output.txt", res);