// Метро
// Метрополитен состоит из нескольких линий метро. Все станции метро в городе пронумерованы натуральными числами от 1 до N. На каждой линии расположено несколько станций. Если одна и та же станция расположена сразу на нескольких линиях, то она является станцией пересадки и на этой станции можно пересесть с любой линии, которая через нее проходит, на любую другую (опять же проходящую через нее).

// Напишите программу, которая по данному вам описанию метрополитена определит, с каким минимальным числом пересадок можно добраться со станции A на станцию B. Если данный метрополитен не соединяет все линии в одну систему, то может так получиться, что со станции A на станцию B добраться невозможно, в этом случае ваша программа должна это определить.

// Формат ввода
// Сначала вводится число N — количество станций метро в городе (2≤N≤100). Далее следует число M — количество линий метро (1≤M≤20). Далее идет описание M линий. Описание каждой линии состоит из числа Pi — количество станций на этой линии (2≤Pi≤50) и Pi чисел, задающих номера станций, через которые проходит линия (ни через какую станцию линия не проходит дважды).

// Затем вводятся два различных числа: A — номер начальной станции, и B — номер станции, на которую нам нужно попасть. При этом если через станцию A проходит несколько линий, то мы можем спуститься на любую из них. Так же если через станцию B проходит несколько линий, то нам не важно, по какой линии мы приедем.

// Формат вывода
// Выведите минимальное количество пересадок, которое нам понадобится. Если добраться со станции A на станцию B невозможно, программа должна вывести одно число –1 (минус один).

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

// Parsing and preparations
let data = fileContent.trim().split('\n');

data = data.map(d => d.trim());
let [N, M, ...paths] = data;
let positions = paths.slice(-1);
paths.pop();

N = +N;
M = +M;
paths = paths.map(c => c.split(' ').map(n => +n));
positions = positions[0].split(' ').map(n => +n);
let visited = new Array(M+1).fill(false);
let [startPos, finishPos] = positions;

// Creating linked list
let linkedList = {0: null};
let lines = paths.map((p, i) => {
  return {val: i+1, stops: p.slice(1)}
});

for (let i = 1; i <= M; i++) {
  linkedList[i] = [];
  for (let j = i + 1; j <= M; j++) {
    let arrA = lines[i-1].stops;
    let arrB = lines[j-1].stops;
    let set = new Set([...arrA, ...arrB]);
    if (set.size < arrA.length + arrB.length) linkedList[i].push(lines[j-1].val);
  }
}

for (let i = 1; i <= M; i++) {
  for (let j = i + 1; j <= M; j++) {
    let arrA = lines[i-1].stops
    let arrB = lines[j-1].stops;
    let set = new Set([...arrA, ...arrB]);
    if (set.size < arrA.length + arrB.length) linkedList[j].push(lines[i-1].val);
  }
}

// Starting BFS
let res = -1;
let startedLines = lines.filter(line => line.stops.includes(startPos)).map(line => line.val);
let finishLines = lines.filter(line => line.stops.includes(finishPos)).map(line => line.val);

let isFound = startedLines.filter(x => finishLines.includes(x)).length > 0;

if (isFound) {
  res = 0;
} else {
  for (let i = 0; i < startedLines.length; i++) {
    for (let j = 0; j < finishLines.length; j++) {
      bfs(linkedList, startedLines[i], finishLines[j]);
    }
  }
}

function bfs (grahp, start, finish) {
  let queue = [];
  let cur = {val: start, cnt: 0};
  queue.push(cur);

  while (queue.length > 0) {
    let now = queue.shift();
    visited[now.val] = true;
    let neighbors = grahp[now.val];
    for (const neig of neighbors) {
      if (neig === finish) {
        if (res !== -1) {
          res = Math.min(res, now.cnt + 1);
        } else {
          res = now.cnt + 1;
        }
      }
      if (!visited[neig]) queue.push({val: neig, cnt: now.cnt + 1});
    }
  }

  visited = visited.map(v => v === true ? false : v);
}

fs.writeFileSync("output.txt", String(res));