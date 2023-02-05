// Бинарный поиск

// Задана отсортированная по неубываниюю последовательность
// из N чисел и число Х

// Необходимо определить сколько раз число Х входит
// в последовательность

// Решение.
// Найдём одним левым биноиском первое число больше либо равное Х,
// а вторым левым бинпоиском - число строго большее Х.
// Разность индексов и будет количеством вхождений. 

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

function checkisgt (index, params) {
	const [seq, x] = params;
	return seq[index] > x;
}

function checkisge (index, params) {
	const [seq, x] = params;
	return seq[index] >= x;
}

function findFirst(seq, x, check) {
	let ans = lbinSearch(0, seq.length - 1, check, [seq, x]);
	if (!check(ans, [seq, x])) {
		return seq.length;
	} else {
		return ans;
	}
}

function countx (seq, x) {
	let indexgt = findFirst(seq, x, checkisgt);
	let indexge = findFirst(seq, x, checkisge);
	return indexgt - indexge;
}