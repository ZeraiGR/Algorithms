// Префиксные суммы
import { assert } from "../../../tester.js";

// Дана последовательность чисел длиной N

// Необходимо найти количество отрезков с нулевой суммой.

// Решение за O(N^3)
// Переберём начало и конец отрезка и просто просуммируем
// все его элементы

function countZeroSumRanges(nums) {
	let cntranges = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length + 1; j++) {
			let rangesum = 0;
			for (let k = i; k <= j; k++) {
				rangesum += nums[k];
			}
			if (rangesum === 0) cntranges += 1;
		}
	}
	return cntranges;
}

assert(1, countZeroSumRanges([1,-1,4,5]), 1);

// Решение за O(N^2)
// Переберём начало и будем сдвигать конец, суммируя элементы

function countZeroSumRanges2 (nums) {
	let cntranges = 0;
	for (let i = 0; i < nums.length; i++) {
		let rangesum = 0;
		for (let j = i; j < nums.length; j++) {
			rangesum += nums[j];
			if (rangesum === 0) cntranges += 1;
		}
	}
	return cntranges;
}

assert(2, countZeroSumRanges2([1,-1,4,5]), 1);

// Решение за O(N)
// Насчитаем профиксные суммы. Одинаковые префиксные суммы 
// означают, что сумма на отрезке с началом и концом в позициях,
// на которых достигаются одинаковые префиксные суммы,
// будет равна нулю.

function countPrefixSums (nums) {
	let prefixSumByValue = {0: 1};
	let nowsum = 0;

	for (const now of nums) {
		nowsum += now;
		prefixSumByValue[nowsum] = (prefixSumByValue[nowsum] ?? 0) + 1;
	}

	return prefixSumByValue;
}

function div (a,b) {
	return (a - (a % b)) / b;
}

function countZeroSumRanges3 (prefixSumByValue) {
	let cntranges = 0;
	for (const nowsum in prefixSumByValue) {
		let cntsum = prefixSumByValue[nowsum];
		cntranges += div(cntsum * (cntsum - 1), 2);
	}
	return cntranges;
}

const prefixSumByValue = countPrefixSums([1,-1,4,5]);
assert(3, countZeroSumRanges3(prefixSumByValue), 1);
