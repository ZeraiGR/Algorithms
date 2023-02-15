// Уникальные элементы

// Дан список. Выведите те его элементы, которые встречаются в списке только один раз. Элементы нужно выводить в том порядке, в котором они встречаются в списке.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const seq = fileContent.trim().split(' ').map(n => +n);

let dct = {};

for (const i of seq) {
	dct[i] = (dct[i] ?? 0) + 1;
}

let res = seq.filter((i) => dct[i] === 1);

fs.writeFileSync("output.txt", res.join(' '));