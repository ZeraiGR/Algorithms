// Как известно, два наиболее распространённых формата записи даты — это европейский (сначала день, потом месяц, потом год) и американски (сначала месяц, потом день, потом год). Системный администратор поменял дату на одном из бэкапов и сейчас хочет вернуть дату обратно. Но он не проверил, в каком формате дата используется в системе. Может ли он обойтись без этой информации?
// Иначе говоря, вам даётся запись некоторой корректной даты. Требуется выяснить, однозначно ли по этой записи определяется дата даже без дополнительной информации о формате.

// Формат ввода
// Первая строка входных данных содержит три целых числа — x, y и z (1 ≤ x ≤ 31, 1 ≤ y ≤ 31, 1970 ≤ z ≤ 2069. Гарантируется, что хотя бы в одном формате запись x y z задаёт корректную дату.

// Формат вывода
// Выведите 1, если дата определяется однозначно, и 0 в противном случае.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const [a, b, y] = fileContent.trim().split(' ').map(n => +n);

let res;

if (a <= 12 && b <= 12 && a != b) {
	res = 0; 
} else {
	res = 1;
}

fs.writeFileSync("output.txt", res.toString())