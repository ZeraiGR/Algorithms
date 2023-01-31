// Последовательность состоит из натуральных чисел и завершается числом 0. Всего вводится не более 10000 чисел (не считая завершающего числа 0). Определите, сколько элементов этой последовательности равны ее наибольшему элементу. Числа, следующие за числом 0, считывать не нужно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит).


// Формат вывода
// Выведите ответ на задачу.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const seq = fileContent.replace(/\s+/g, ' ').trim().split(' ').map(n => +n);

seq.pop();

let max = seq[0];
for (let i = 1; i < seq.length; i++) {
	if (seq[i] > max) max = seq[i];
}

let res = 0;
for (let i = 0; i < seq.length; i++) {
	if (seq[i] === max) res++;
}

fs.writeFileSync("output.txt", res.toString())