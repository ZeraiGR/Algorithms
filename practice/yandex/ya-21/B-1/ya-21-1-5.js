// На координатной плоскости расположены равнобедренный прямоугольный треугольник ABC с длиной катета d и точка X. Катеты треугольника лежат на осях координат, а вершины расположены в точках: A (0,0), B (d,0), C (0,d).

// Напишите программу, которая определяет взаимное расположение точки X и треугольника. Если точка X расположена внутри или на сторонах треугольника, выведите 0. Если же точка находится вне треугольника, выведите номер ближайшей к ней вершины.

// Формат ввода
// Сначала вводится натуральное число d (не превосходящее 1000), а затем координаты точки X – два целых числа из диапазона от ­–1000 до 1000.

// Формат вывода
// Если точка лежит внутри, на стороне треугольника или совпадает с одной из вершин, то выведите число 0. Если точка лежит вне треугольника, то выведите номер вершины треугольника, к которой она расположена ближе всего (1 – к вершине A, 2 – к B, 3 – к C). Если точка расположена на одинаковом расстоянии от двух вершин, выведите ту вершину, номер которой меньше.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const [d, x, y] = fileContent.replace(/\s+/g, ' ').trim().split(' ').map(n => +n);

let res;

function calsDistance([x, y], [a, b]) {
	let distance = 0;

	while (x !== a) {
		distance++;
		x > a ? x-=1 : x+=1;
	}

	while (y !== b) {
		distance++;
		y > b ? y-=1 : y+=1;
	}

	return distance;
}

if (x >= 0 && x <= d && y >= 0 && y <= d - x) {
	res = 0;
} else {
	const distancies = {
		distanceToA: calsDistance([x, y], [0, 0]),
		distanceToB: calsDistance([x, y], [d, 0]),
		distanceToC: calsDistance([x, y], [0, d]),
	};
    
    let minDistance = Math.min(distancies.distanceToA, distancies.distanceToB, distancies.distanceToC);
    
    if (distancies.distanceToA == minDistance) {
		res = 1;
	} else if (distancies.distanceToB == minDistance) {
		res = 2;
	} else if (distancies.distanceToC == minDistance) {
		res = 3;
	}
	
}

fs.writeFileSync("output.txt", res.toString());

// Another way to solve

// if (x >= 0 && y >= 0 && x + y <= d) {
// 	res = 0;
// } else {
// 	const dist = [[x ** 2 + y ** 2, 1], [(x - d) ** 2 + y ** 2, 2], [(y - d) ** 2 + x ** 2, 3]];
// 	dist.sort((a,b) => a[0] - b[0]);
// 	res = dist[0][1];
// }