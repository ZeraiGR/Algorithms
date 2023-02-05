// Бинарный поиск

// Задана отсортированная по неубыванию последовательность (т.е числа в ..последовательности могут повторяться) из N чисел и число X

// Необходимо определить индекс первого числа в последовательности, которое больше либо равно X. Если такого числа нет, то вернуть число N.

// Решение.
// Воспользуемся левым бинпоиском для поиска первого подходящего
// числа. В случае, если бинпоиск сошелся к числу, меньшему X вернём N.

function lbinSearch (l, r, check, checkparams) {
	while (l < r) {
		let m = div((l + r), 2);
		if (check(m, checkparams)) {
			r = m;
		} else {
			l = m + 1;
		}
	}
	return l;
}

function checkishe (index, params) {
	const [seq, x] = params;
	return seq[index] >= x;
}

function findFirstge (seq, x) {
	let ans = lbinSearch(0, seq.length - 1, checkishe, [seq, x]);
	if (seq[ans] < x) {
		return seq.length;
	} else {
		return ans;
	}
}