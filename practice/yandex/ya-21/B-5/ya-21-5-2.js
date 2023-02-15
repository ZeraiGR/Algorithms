// Максимальная сумма

// В этой задаче вам требуется найти непустой отрезок массива с максимальной суммой.

// Формат ввода
// В первой строке входных данных записано единственное число n (1 ≤ n ≤ 3105) -  размер массива. Во второй строке записано n целых чисел ai (−109 ≤ ai ≤ 109) - сам массив.

// Формат вывода
// Выведите одно число - максимальную сумму на отрезке в данном массиве.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const data = fileContent.trim().split('\n');
const arr = data[1].split(' ').map(n => +n);

let maxSum = arr[0];
let curSum = 0;

for (const item of arr) {
	curSum = Math.max(item, curSum + item);
	maxSum = Math.max(maxSum, curSum);
}

let res = maxSum;

fs.writeFileSync("output.txt", String(res));