// Линейный поиск
import { assert } from "../../../tester.js";

// Дана последовательность чисел длиной N
// Найти минимальное четное число в последовательности
// или вывести -1, если такого не существует.

// Решение.
// В переменную для ответа положим -1. Если очередное число четное,
// а ответ равен -1 или ответ больше текущего числа, то запишем в ответ
// текущее число.

// Если бы в условии требовалось найти нечетное, то с -1 можно попасть в неприятную ситуацию.
function findMinEven (seq) {
	let ans = -1;

	for (const i of seq) {
		if (i % 2 === 0 && (ans === -1 || ans > i)) ans = i;
	}

	return ans;
}

// Использование флажка, чтобы алгоритм стал более универсальным
function findMinEven2 (seq) {
	let ans = -1;
	let flag = false;

	for (const i of seq) {
		if (i % 2 === 0 && (!flag || ans > i)) {
			flag = true;
			ans = i;
		}
	}

	return ans;
}

assert(1, findMinEven([2,3,4,5]), 2);
assert(2, findMinEven([4,3,2,1,-2]), -2);
assert(3, findMinEven([10,2,1,1,11]), 2);
assert(4, findMinEven([1,-2,4,-1,2]), -2);
assert(5, findMinEven([-1,-2,-1,-1,-2]), -2);

assert(6, findMinEven2([2,3,4,5]), 2);
assert(7, findMinEven2([4,3,2,1,-2]), -2);
assert(8, findMinEven2([10,2,1,1,11]), 2);
assert(9, findMinEven2([1,-2,4,-1,2]), -2);
assert(10, findMinEven2([-1,-2,-1,-1,-2]), -2);