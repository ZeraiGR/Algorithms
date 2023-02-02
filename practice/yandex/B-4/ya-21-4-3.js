// Частотный анализ

// Дан текст. Выведите все слова, встречающиеся в тексте, по одному на каждую строку. Слова должны быть отсортированы по убыванию их количества появления в тексте, а при одинаковой частоте появления — в лексикографическом порядке. Указание. После того, как вы создадите словарь всех слов, вам захочется отсортировать его по частоте встречаемости слова. Желаемого можно добиться, если создать список, элементами которого будут кортежи из двух элементов: частота встречаемости слова и само слово. Например, [(2, 'hi'), (1, 'what'), (3, 'is')]. Тогда стандартная сортировка будет сортировать список кортежей, при этом кортежи сравниваются по первому элементу, а если они равны — то по второму. Это почти то, что требуется в задаче.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );
const text = fileContent.trim().replace(/\s+/g, ' ').split(' ');
let map = new Map();

text.forEach(w => {
	map.set(w, (map.get(w) ?? 0) + 1);
});

const callback = (a,b) => {
	if (a[0] === b[0]) {
		if (a[1] === b[1]) {
			return 0;
		} else if (a[1] > b[1]) {
			return 1;
		} else {
			return -1;
		}
	} else if (a[0] > b[0]) {
		return -1;
	} else {
		return 1;
	}
}

let res = [...map.entries()].map(([name, count]) => ([count, name])).sort(callback).map(el => el[1]);

fs.writeFileSync("output.txt", res.join('\n'));