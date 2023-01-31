// Количество совпадающих

// Даны два списка чисел, которые могут содержать до 100000 чисел каждый. Посчитайте, сколько чисел содержится одновременно как в первом списке, так и во втором. Примечание. Эту задачу на Питоне можно решить в одну строчку.

// Формат ввода
// Вводятся два списка чисел. Все числа каждого списка находятся на отдельной строке.

// Формат вывода
// Выведите ответ на задачу.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const seq1 = fileContent.trim().split('\n')[0].split(' ').map(n => +n);
const seq2 = fileContent.trim().split('\n')[1].split(' ').map(n => +n);

const set1 = new Set(seq1);

let res = 0;

for (const i of seq2) {
	if (set1.has(i)) res++;
}

fs.writeFileSync("output.txt", res.toString());