// Топологическая сортировка
// Дан ориентированный граф. Необходимо построить топологическую сортировку.

// Формат ввода
// В первой строке входного файла два натуральных числа N и M (1 ≤ N, M ≤ 100 000) — количество вершин и рёбер в графе соответственно. Далее в M строках перечислены рёбра графа. Каждое ребро задаётся парой чисел — номерами начальной и конечной вершин соответственно.

// Формат вывода
// Выведите любую топологическую сортировку графа в виде последовательности номеров вершин (перестановка чисел от 1 до N). Если топологическую сортировку графа построить невозможно, выведите -1.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [data, ...edgelist] = fileContent.trim().split('\n');

data = data.split(' ').map(n => +n);
edgelist = edgelist.map(e => e.trim().split(' ').map(n => +n));
let linkedList = {0: null};
let visited = new Array(data[0] + 1).fill(0);

// Create linked list
for (const [a, b] of edgelist) {
  if (Array.isArray(linkedList[a])) {
    if (!linkedList[a].includes(b)) linkedList[a].push(b);
  } else {
    linkedList[a] = [b];
  }
}

for (let i = 1; i < data[0] + 1; i++) {
  if (!Array.isArray(linkedList[i])) linkedList[i] = [];
}

let isCycle = null;
let sorted = [];

for (let i = 1; i <= data[0]; i++) {
  if (visited[i] === 0) {
    let stack = [];
    stack.push([i, 0]);
    while (stack.length > 0) {
      let localvars = stack[stack.length - 1];
      let labelfrom = localvars[1];
      let now = localvars[0];

      if (labelfrom <= 0) {
        if (linkedList[now].length === 0 || (linkedList[now].length > 0) && linkedList[now].every(n => visited[n] === 2)) {
          if (visited[now] !== 2) sorted.push(now);
          visited[now] = 2;
          stack.pop();
          continue;
        }
        localvars[1] = 1;
        if (visited[now] === 0) visited[now] = 1;
        for (const neig of linkedList[now]) {
          if (visited[neig] === 1) isCycle = true;
          if (visited[neig] === 0) {
            stack.push([neig, 0]);
          }
        }
        continue;
      }
      if (labelfrom <= 1) {
        visited[now] = 2;
        sorted.push(now);
        stack.pop();
        continue;
      }
    }
  }
}

let res;

if (isCycle) {
  res = [-1];
} else {
  sorted.reverse();
  res = sorted;
}

fs.writeFileSync("output.txt", res.join(' '));