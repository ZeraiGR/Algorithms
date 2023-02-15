// Префиксные суммы

// В этой задаче вам нужно будет много раз отвечать на запрос «Найдите сумму чисел на отрезке в массиве».

// Формат ввода
// В первой строке записано два целых числа n и q (1 ≤ n, q ≤ 3*10^5) - размер массива и количество запросов. Во второй строке записаны n целых чисел ai (1 ≤ ai ≤ 10^9) - сам массив.
// Далее в q строках описаны запросы к массиву. Каждый запрос описывается двумя числами l, r (1 ≤ l ≤ r ≤ n ) - левой и правой границей отрезка, на котором нужно найти сумму.

// Формат вывода
// Для каждого запроса в отдельной строке выведите единственное число - сумму на соответствующем отрезке.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );
const data = fileContent.trim().split('\n');
let n = +data[0].split(' ')[1];
let arr = data[1].split(' ').map(n => +n);

function makePrefixSum (arr) {
	let prefixSum = new Array(arr.length + 1).fill(0);
	for (let i = 1; i < arr.length + 1; i++) {
		prefixSum[i] = prefixSum[i-1] + arr[i-1];
	}
	return prefixSum;
}

function getIntervalSum (prefixsum, l, r) {
	if (l === r) {
		return arr[l-1];
	} else {
		return prefixsum[r] - prefixsum[l-1];
	}
}

let prefixSum = makePrefixSum(arr);
let res = [];
let range = data.slice(2);

for (let i = 0; i < n; i++) {
	const [a,b] = range[i].split(' ').map(n => +n);
	res.push(getIntervalSum(prefixSum, a, b));
}

fs.writeFileSync("output.txt", res.join('\n'));