// Автомобильные номера

// Неизвестный водитель совершил ДТП и скрылся с места происшествия. Полиция опрашивает свидетелей. Каждый из них говорит, что запомнил какие-то буквы и цифры номера. Но при этом свидетели не помнят порядок этих цифр и букв. Полиция хочет проверить несколько подозреваемых автомобилей. Будем говорить, что номер согласуется с показанием свидетеля, если все символы, которые назвал свидетель, присутствуют в этом номере (не важно, сколько раз).

// Формат ввода
// Сначала задано число  - количество свидетелей. Далее идет M строк, каждая из которых описывает показания очередного свидетеля. Эти строки непустые и состоят из не более чем 20 символов. Каждый символ в строке - либо цифра, либо заглавная латинская буква, причём символы могут повторяться.
// Затем идёт число  - количество номеров. Следующие строки представляют из себя номера подозреваемых машин и имеют такой же формат, как и показания свидетелей.

// Формат вывода
// Выпишите номера автомобилей, согласующиеся с максимальным количеством свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были заданы на входе.

const data = fileContent.trim().split('\n');

// parsing
let с = +data[0];
const m = [];
const n = [];
for (let i = 1; i <= с; i++) {
	m.push(data[i].trim());
}
for(let i = с + 2; i < data.length; i++) {
	n.push(data[i].trim());
}

// solution
const dct = [];

function countMatches (num) {
	let res = 0;
	for (let t of m) {
		t = new Set(t);
		let isAgree = true;
		t.forEach(s => {
			if (!num.includes(s)) isAgree = false;
		});
		if (isAgree) res++;
	}
	return res;
}

for (const num of n) {
	dct.push([num, countMatches(num)]);
}

let max = 0;
for (const [_, matches] of dct) {
	if (matches > max) max = matches;
}

let res = dct.filter(([_, matches]) => matches === max).map(el => el[0]);

fs.writeFileSync("output.txt", res.join('\n'));