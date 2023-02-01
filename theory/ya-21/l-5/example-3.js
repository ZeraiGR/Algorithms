// Два указателя
import { assert } from "../../../tester.js";

// Дана отсортированная последовательность чисел 
// длиной N и число K

// Необходимо найти количество пар чисел А,В, таких что В - А > K.

// Решение за O(N^2)
// Переберем все пары чисел и для каждой проверим условие

function cntPairsWithDiffgtk(sortednums, k) {
	let cntpairs = 0;
	for (const first of sortednums) {
		for (let last = first; last < sortednums.length; last++) {
			if (sortednums[last] - first > k) cntpairs++;
		}
	}
	return cntpairs;
}

assert(1, cntPairsWithDiffgtk([1,4,7,8], 4), 2);

// Решение за O(N)
// Возьмём наименьшее число и найдём для него первое подходящее
// большее. Все ещё большие числа точно подходят. Возьмём в качестве
// меньшего числа следующее, а указатель первого подходящего
// большего будем двигать начиная с той позиции, где он находится сейчас.

function cntPairsWithDiffgtk2 (sortednums, k) {
	let cntpairs = 0;
	let last = 0;
	for (let first = 0; first <= sortednums.length; first++) {
		while (last < sortednums.length && sortednums[last] - sortednums[first] <= k) {
			last += 1;
		}
		cntpairs += sortednums.length - last;
	}
	return cntpairs;
}

assert(2, cntPairsWithDiffgtk2([1,3,7,8], 4), 3);