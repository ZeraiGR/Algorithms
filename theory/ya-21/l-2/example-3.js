// Линейный поиск
import { assert } from "../../../tester.js";

// Дана последовательность чисел длиной N (N > 0)
// Найти максимальное число в последовательности.

// Решение.
// Сначала положим в ответ нулевой элемент последовательности
// (он точно существует), затем будем перебирать все элементы.
// Если текущий элемент больше ответа - запишем в ответ текущий
// элемент
function findMax (seq) {
	let max = seq[0]; // or -Infinity and start loop from zero

	for (let i = 1; i < seq.length; i++) {
		if (seq[i] > max) max = seq[i]; // It can be too expensive sign operation 
	}

	return max;
}

// More effective way for memory but slower speed
function findMax2 (seq) {
	let max = 0;

	for (let i = 1; i < seq.length; i++) {
		if (seq[i] > seq[max]) max = i; 
	}

	return seq[max];
}

assert(1, findMax([1,2,1,3,2]), 3);
assert(2, findMax([10,2,1,1,3]), 10);
assert(3, findMax([10,2,1,1,11]), 11);
assert(4, findMax([1,-2,4,-1,2]), 4);
assert(5, findMax([-1,-2,-1,-1,-2]), -1);

assert(6, findMax2([1,2,1,3,2]), 3);
assert(7, findMax2([10,2,1,1,3]), 10);
assert(8, findMax2([10,2,1,1,11]), 11);
assert(9, findMax2([1,-2,4,-1,2]), 4);
assert(10, findMax2([-1,-2,-1,-1,-2]), -1);