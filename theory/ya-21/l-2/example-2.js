// Линейный поиск
import { assert } from "../../../tester.js";

// Дана последовательность чисел длиной N
// Найти последнее (правое) вхождение числа Х
// в неё или вывести -1, если число Х не встречалось.

// Решение.
// Сначала положим в ответ -1, затем будем перебирать все элементы.
// Если текущий элемент равен Х - запишем в ответ текущую позицию.
function firstFind (seq, x) {
	let ans = -1;

	for (let i = 0; i < seq.length; i++) {
		if (seq[i] === x) ans = i;
	}

	return ans;
}

assert(1, firstFind([1,2,1,1,2], 2), 4);
assert(2, firstFind([1,-2,1,-1,2], 2), 4);
assert(3, firstFind([-1,-2,-1,-1,-2], -2), 4);