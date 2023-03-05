// Поиск в глубину

// Дан неориентированный граф, возможно, с петлями и кратными ребрами. Необходимо построить компоненту связности, содержащую первую вершину.

// Формат ввода
// В первой строке записаны два целых числа N (1 ≤ N ≤ 10^3) и M (0 ≤ M ≤ 5 * 10^5) — количество вершин и ребер в графе. В последующих M строках перечислены ребра — пары чисел, определяющие номера вершин, которые соединяют ребра.

// Формат вывода
// В первую строку выходного файла выведите число K — количество вершин в компоненте связности. Во вторую строку выведите K целых чисел — вершины компоненты связности, перечисленные в порядке возрастания номеров.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [data, ...edgelist] = fileContent.trim().split('\n');

data = data.split(' ').map(n => +n);
edgelist = edgelist.map(e => e.trim().split(' ').map(n => +n));
let linkedList = {0: null};
let visited = new Array(data[0]).fill(false);
visited.unshift(null);
let res = [];

for (const [a, b] of edgelist) {
  if (Array.isArray(linkedList[a])) {
    if (!linkedList[a].includes(b)) linkedList[a].push(b);
  } else {
    linkedList[a] = [b];
  }
}

for (const [a, b] of edgelist) {
  if (Array.isArray(linkedList[b])) {
    if (!linkedList[b].includes(a)) linkedList[b].push(a);
  } else {
    linkedList[b] = [a];
  }
}

function dfs (graph, visited, now) {
  if (!graph[now]) return;
  visited[now] = true;
  for (const neig of graph[now]) {
    if (!visited[neig]) dfs(graph, visited, neig);
  }
  res.push(now);
}

dfs(linkedList, visited, 1);
res.sort((a, b) => a - b);

let ans = String(res.length) + '\n' + res.join(' ');

if (res.length === 0 && data[0] > 0) {
  res = [1];
  ans = String(res.length) + '\n' + res.join(' ');
} else if (res.length === 0 && data[0] === 0) {
  ans = String(0);
}

fs.writeFileSync("output.txt", ans);