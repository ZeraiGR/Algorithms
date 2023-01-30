// Словарь
import { assert } from "../../../tester.js"; 

// На шахматной доске N * N находятся M ладей (ладья бьёт
// клетки на той же горизонтали или вертикали до ближайшей
// занятой)

// Определите, сколько пар ладей бьют друг друга.
// Ладьи задаются парой чисел L и J, обозначающих координаты
// клетки.
// 1 <= N <= 10^9, 0 <= M <= 2 * 10^5

// Решение
// Для каждой занятой горизонтали и вертикали будем хранить
// количество ладей на них. Количество пар в горизонтали
// (вертикали) равно количеству ладей минус 1. Суммируем
// это количество пар для всех горизонталей и вертикалей.

function countbeatingrooks (rookcoords){
	function addrook(roworcol, key) {
		return roworcol[key] = (roworcol[key] ?? 0) + 1;
	}

	function countpairs(roworcol) {
		let pairs = 0;
		Object.keys(roworcol).forEach(key => {
			pairs += roworcol[key] - 1;
		});
		return pairs;
	}

	let rooksinrow = {};
	let rooksincol = {};

	for (const [row, col] of rookcoords) {
		addrook(rooksinrow, row);
		addrook(rooksincol, col);
	}

	return countpairs(rooksinrow) + countpairs(rooksincol);
}

assert(1, countbeatingrooks([[1,4], [2,1], [2,3], [3,4], [4,2], [4,3], [4,4]]), 6);