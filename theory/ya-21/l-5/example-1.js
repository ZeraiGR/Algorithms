// Префиксные суммы
import { assert } from "../../../tester.js";
// Дана последовательность чисел длиной N и M запросов

// Запросы: "Сколько нулей на полуинтервале [L, R)".

// Решение за O(NM)
// Для каждого запроса перебираем все числа от L до R
// (не включительно) и считаем количество нулей. В худшем
// случае каждый запрос за O(N)

function countzeroes(nums, l, r) {
	let cnt = 0;
	for (let i = l; i < r; i++) {
		if (nums[i] === 0) cnt += 1;
	}
	return cnt;
}

assert(1, countzeroes([1,3,0,3,0,3,2,1,0,2,1,3], 4, 9), 2);

// Решение за O(N + M)
// Для каждого префикса посчитаем количесво нулей на нем
// (prefixzeroes). Тогда ответ на запрос на полуинтервале [L,R):
// prefixzeroes[R] - prefixzeroes[L]

function makeprefixZeroes(nums) {
	let prefixzeroes = new Array(nums.length + 1).fill(0);
	for (let i = 1; i < nums.length + 1; i++) {
		if (nums[i - 1] === 0) {
			prefixzeroes[i] = prefixzeroes[i - 1] + 1;
		} else {
			prefixzeroes[i] = prefixzeroes[i - 1];
		}
	}
	return prefixzeroes;
}

function countzeroes2 (prefixzeroes, l, r) {
	return prefixzeroes[r] - prefixzeroes[l];
}

const prefixzeroes = makeprefixZeroes([1,3,0,3,0,3,2,1,0,2,1,3]);

assert(2, countzeroes2(prefixzeroes, 4, 9), 2);
