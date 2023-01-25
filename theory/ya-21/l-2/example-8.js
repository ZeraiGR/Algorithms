// Линейный поиск
import { assert } from "../../../tester.js";

// Задачка с собеседования

// Дана строка (возможно, пустая), состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB

// Нужно написать функцию RLE, которая на выходе даст строку вида:
// A4B3C2XYZD4E3F3A6B28. И сгенерирует ошибку, если на вход
// пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остаётся без изменений;
// Если символ повторяется более 1 раза, к нему добавляется количество
// повторений.

// My solution - attempt
function RLE (str) { 
	if (!/[A-Z]+/g.test(str)) {
		console.log('Невалидная строка!');
		return null;
	}

	let seq = [[str[0], 1]];
	let curIdx = 0;
	let curLetter = str[0];
	for (let i = 1; i < str.length; i++) {
		if (curLetter === str[i]) {
			seq[curIdx][1]++;
		} else {
			curIdx++;
			curLetter = str[i];
			seq[curIdx] = [str[i], 1];
		}
	}

	let ans = [];
	for (const item of seq) {
		if (item[1] === 1) {
			ans.push(item[0]);
		} else {
			ans.push(item[0], item[1]);
		}
	}

	return ans.join('');
}

assert(1, RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB'), 'A4B3C2XYZD4E3F3A6B19');
assert(2, RLE('fdsfsajfdksaj'), null);
assert(3, RLE('A'), 'A');
assert(4, RLE('ABB'), 'AB2');
assert(5, RLE('ABBА'), 'AB2А');

// Упрощение задачи

// Дана строка (возможно, пустая), состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB

// Нужно написать функцию, которая на выходе даст строку вида:
// ABCXYZDEFAB

function easyRLE (s) {
	let lastsym = s[0];
	let ans = [];
	for (let i = 1; i < s.length; i++) {
		if (s[i] !== lastsym) {
			ans.push(lastsym);
			lastsym = s[i];
		}
	}
	ans.push(lastsym);
	return ans.join('');
}

// console.log(easyRLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB'));

// Решение полной задачи

function correctRLE (s) {
	if (!/[A-Z]+/g.test(s)) {
		console.log('Невалидная строка!');
		return null;
	}

	const pack = (s, cnt) => {
		if (cnt > 1) {
			return String(s + cnt);
		} else {
			return String(s);
		}
	};
	
	let lastsym = s[0];
	let lastpos = 0;
	let ans = [];
	for (let i = 1; i < s.length; i++) {
		if (s[i] !== lastsym) {
			ans.push(pack(lastsym, i - lastpos));
			lastpos = i;
			lastsym = s[i];
		}
	}
	ans.push(pack(s[lastpos], s.length - lastpos));
	return ans.join('');
}

assert(6, correctRLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBB'), 'A4B3C2XYZD4E3F3A6B19');
assert(7, correctRLE('fdsfsajfdksaj'), null);
assert(8, correctRLE('A'), 'A');
assert(9, correctRLE('ABB'), 'AB2');
assert(10, correctRLE('ABBA'), 'AB2A');