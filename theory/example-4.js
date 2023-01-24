// Покрытие тестами
import { assert } from "../tester.js";

// Задача: даны три целых числа a,b,c.
// Найдите все корни уравнения ax^2 + bx + с = 0
// и выведите их в порядке возрастания

function squareSeq (a,b,c) {
	const d = b ** 2 - 4 * a * c;
	if (a === 0) {
		if (b != 0) return -c / b;
		if (b === 0 && c === 0) return Infinity;
	}
	if (d === 0) {
		if (b!==0) return -b / (2 * a);
	} else if (d > 0) {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		let res = [x1, x2];
		return res.sort((a,b) => a - b).join(' ');
	}
	return null
}

assert(1, squareSeq(1,2,1), -1);
assert(2, squareSeq(1,1,1), null);
assert(3, squareSeq(0,1,1), -1);
assert(4, squareSeq(0,0,1), null);
assert(5, squareSeq(0,0,0), Infinity);
assert(6, squareSeq(-5,4,1), '-0.2 1');
