// Бинарный поиск

// В управляющий совет школы входят родители, учителя и учащиеся
// школы, причём родителей должно быть не менее одной трети
// от общего числа членов совета. В настоящий момент в совет входит
// N человек, из них K родителей.

// Определите, сколько родителей нужно дополнительно ввести в совет,
// чтобы их число стало составлять не менее трети числа от членов совета.

// Решение.
// Будем искать минимальное количество родителей, которых нужно
// добавить, бинарным поиском. Не забываем, что новые родители
// добавляются к общему числу членов совета. Не используем деление.
// L = 0, R = N

function lbinSearch (l, r, check, checkparams) {
	while (l < r) {
		let m = Math.trunc((l + r) / 2);
		if (check(m, checkparams)) {
			r = m;
		} else {
			l = m + 1;
		}
	}
	return l;
}

function checkEndowment (m, params) {
	let [n, k] = params;
	return (k + m) * 3 >= n + m;
}