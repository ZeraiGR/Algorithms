// Списывание
// Во время контрольной работы профессор Флойд заметил, что некоторые студенты обмениваются записками. Сначала он хотел поставить им всем двойки, но в тот день профессор был добрым, а потому решил разделить студентов на две группы: списывающих и дающих списывать, и поставить двойки только первым.

// У профессора записаны все пары студентов, обменявшихся записками. Требуется определить, сможет ли он разделить студентов на две группы так, чтобы любой обмен записками осуществлялся от студента одной группы студенту другой группы.

// Формат ввода
// В первой строке находятся два числа N и M — количество студентов и количество пар студентов, обменивающихся записками (1 ≤ N ≤ 10^2, 0 ≤ M ≤ N(N−1)/2).

// Далее в M строках расположены описания пар студентов: два числа, соответствующие номерам студентов, обменивающихся записками (нумерация студентов идёт с 1). Каждая пара студентов перечислена не более одного раза.

// Формат вывода
// Необходимо вывести ответ на задачу профессора Флойда. Если возможно разделить студентов на две группы - выведите YES; иначе выведите NO.

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

let res = 'YES';
let color = 1;

// DFS

for (let i = 1; i < data[0] + 1; i++) {
  if (visited[i] === 0) {
    dfs(linkedList, visited, i, color);
  }
}

function dfs (graph, visited, now, color) {
  if (!graph[now]) return;
  visited[now] = color;
  for (const neig of graph[now]) {
    if (visited[neig] === color) res = 'NO';
    if (visited[neig] === 0) dfs(graph, visited, neig, 3 - color);
  }
}

fs.writeFileSync("output.txt", res);