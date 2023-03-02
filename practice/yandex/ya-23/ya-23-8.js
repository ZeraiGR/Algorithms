// Минимальный прямоугольник

// На клетчатой плоскости закрашено K клеток. Требуется найти минимальный по площади прямоугольник, со сторонами, параллельными линиям сетки, покрывающий все закрашенные клетки.

// Формат ввода
// Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100). На следующих K строках находятся пары чисел Xi и Yi – координаты закрашенных клеток (|Xi|, |Yi| ≤ 10^9).

// Формат вывода
// Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [k, ...coord] = fileContent.trim().split('\n');

coord = coord.map(c => c.trim().split(' ').map(n => +n));

let xcoords = coord.map(([x, y]) => x);
let ycoords = coord.map(([x, y]) => y);

let xMax = Math.max(...xcoords);
let xMin = Math.min(...xcoords);
let yMax = Math.max(...ycoords);
let yMin = Math.min(...ycoords);

let res = [xMin, yMin, xMax, yMax];

fs.writeFileSync("output.txt", res.join(' '));