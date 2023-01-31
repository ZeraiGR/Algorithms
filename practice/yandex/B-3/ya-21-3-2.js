// Встречалось ли число раньше

// Во входной строке записана последовательность чисел через пробел. Для каждого числа выведите слово YES (в отдельной строке), если это число ранее встречалось в последовательности или NO, если не встречалось.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const seq = fileContent.trim().split(' ').map(n => +n);

let set = new Set();
let res = [];

for (const i of seq) {
	if (set.has(i)) {
		res.push('YES');
	} else {
		res.push('NO');
		set.add(i);
	}
}

fs.writeFileSync("output.txt", res.join('\n'));