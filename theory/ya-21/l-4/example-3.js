// Словарь
import { assert } from "../../../tester.js";

// Дана строка S

// Выведите гистограмму как в примере (коды символов отсортированы)
// S = Hello, world!

//       #
//       ##
// ##########
//  !,Hdelorw

// Решение.
// Для каждого символа в словаре посчитаем, сколько раз он встречался.
// Найдём самый частый символ и переберем количество от этого числа
// до 1. Пройдём по всем отсортированным ключам и если количество
// больше счетчика - выведем #

function printchart(s) {
	const symcount = {};
	let maxsymCount = 0;
	for (const sym of s) {
		symcount[sym] = (symcount[sym] ?? 0) + 1;
		maxsymCount = Math.max(maxsymCount, symcount[sym]);
	}

	let res = [];
	const sorteduniqsyms = Object.keys(symcount).sort();

	for (let i = maxsymCount; i > 0; i--) {
		for (const sym of sorteduniqsyms) {
			if (symcount[sym] >= i) {
				res.push('#');
			} else {
				res.push(' ');
			}
		}
		res.push('\n');
	}

	for (const sym of sorteduniqsyms) {
		res.push(sym);
	}

	return res.join('');
}

console.log(printchart('Hello world!'));