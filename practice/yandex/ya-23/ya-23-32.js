// Компоненты связности

// Дан неориентированный невзвешенный граф. Необходимо посчитать количество его компонент связности и вывести их.

// Формат ввода
// Во входном файле записано два числа N и M (0 < N ≤ 100000, 0 ≤ M ≤ 100000). В следующих M строках записаны по два числа i и j (1 ≤ i, j ≤ N), которые означают, что вершины i и j соединены ребром.

// Формат вывода
// В первой строчке выходного файла выведите количество компонент связности. Далее выведите сами компоненты связности в следующем формате: в первой строке количество вершин в компоненте, во второй - сами вершины в произвольном порядке.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [data, ...edgelist] = fileContent.trim().split('\n');

data = data.split(' ').map(n => +n);
edgelist = edgelist.map(e => e.trim().split(' ').map(n => +n));
let linkedList = {0: null};
let visited = new Array(data[0]).fill(false);
let marked = new Array(data[0] + 1).fill(0);
visited.unshift(null);

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

for (let i = 1; i < data[0] + 1; i++) {
  if (!Array.isArray(linkedList[i])) linkedList[i] = [];
}

let comp = 1;

for (let i = 1; i < data[0] + 1; i++) {
  let stack = [];
  if (!visited[i]) {
    stack.push(i);
    while (stack.length > 0) {
      let now = stack.pop();
      visited[now] = true;
      marked[now] = comp;
      if (!linkedList[now]) continue;
      for (const neig of linkedList[now]) {
        if (!visited[neig]) stack.push(neig);
      }
    }
    comp += 1;
  }
}

comp -= 1;

let map = {};

for (let i = 1; i < marked.length; i++) {
  if (Array.isArray(map[marked[i]])) {
    map[marked[i]].push(i);
  } else {
    map[marked[i]] = [i];
  }
}

map = Object.entries(map).map(([cur, arr]) => [String(arr.length), arr.join(' ')]).flat();

fs.writeFileSync("output.txt", String(comp) + '\n' + map.join('\n'));