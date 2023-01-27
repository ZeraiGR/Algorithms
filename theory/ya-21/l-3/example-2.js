// Множества
import { assert } from "../../../tester.js";

// Дана последовательность положительных
// чисел длиной N и число Х

// Нужно найти два различных числа А и В
// из последовательности, таких, что А + В = Х
// или вернуть пару 0, 0, если такой пары чисел нет

// My solution (incorrect)
function findArgsOfSum (seq, x) {
	let a = seq[0];

	for (let i = 1; i < seq.length; i++) {
		for (let j = i; j < seq.length; j++) {
			if(x - a === seq[j]) {
				return [a , seq[j]]
			} 
		}
		a = seq[i];
	}

	return [0, 0];
}

console.log(findArgsOfSum([1,2,3,4,5], 10));
console.log(findArgsOfSum([1,2,3,4,5], 9));

// Решение за O(N^2) (с ошибкой)
function twotermswithsumx (seq, x) {
	for (const a of seq) {
		for (const b of seq) {
			if (a + b === x) return [a, b];
		}
	}
	return [0, 0];
}

console.log('----------------------');
console.log(twotermswithsumx([1,2,3,4,5], 10));
console.log(twotermswithsumx([1,2,3,4,5], 9));

// Исправление ошибки
function twotermswithsumx2 (seq, x) {
	for (const a of seq) {
		for (const b of seq) {
			if (a + b === x && a !== b) return [a, b];
		}
	}
	return [0, 0];
}

console.log('----------------------');
console.log(twotermswithsumx2([1,2,3,4,5], 10));
console.log(twotermswithsumx2([1,2,3,4,5], 9));

// Ещё одно исправленное решение за O(N^2)
function twotermswithsumx3 (seq, x) {
	for (let i = 0; i < seq.length; i++) {
		for (let j = i + 1; j < seq.length; j++) {
			if (seq[i] + seq[j] === x) return [seq[i], seq[j]];
		}
	}
	return [0, 0];
}

console.log('----------------------');
console.log(twotermswithsumx3([1,2,3,4,5], 10));
console.log(twotermswithsumx3([1,2,3,4,5], 9));

// Решение за O(N)

// Будем хранить все уже обработанные числа в множестве.
// Если очередное число nownum, а Х - nownum есть
// в множестве, то мы нашли слагаемые

function twotermswithsumx4 (seq, x) {
	const prevnums = new Set();
	for (const now of seq) {
		if (prevnums.has(x - now)) {
			return [now, x - now];
		}
		prevnums.add(now);
	}
	return [0, 0];
}

console.log('----------------------');
console.log(twotermswithsumx4([1,2,3,4,5], 10));
console.log(twotermswithsumx4([1,2,3,4,5], 9));