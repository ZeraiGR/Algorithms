// Бинарный поиск

// Задана процентная ставка по кредиту (X% годовых), срок
// кредитования (N месяцев) и сумма кредита (M рублей)

// Необходимо рассчитать размер аннуитетного ежемесячного платежа.

// Решение подзадачи о ежемесячном проценте
// - Ежемесячный процент не равен Х/12! Подберем его бинпоиском

function checkMonthlyPerc (mperc, yperc) {
	let msum = 1 + mperc / 100;
	let ysum = 1 + yperc / 100;
	return msum ** 12 >= ysum;
}

function fbinSeach (l, r, eps, check, checkparams) {
	while (l + eps < r) {
		let m = (l + r) / 2;
		if (check(m, checkparams)) {
			r = m;
		} else {
			l = m;
		}
	}
	return l;
}

// let x = 12;
// let eps = 0.0001;
// let mperc = fbinSeach(0, x, eps, checkMonthlyPerc, x);

// Решение задачи о размере платежа

// Будем перебирать сумму платежа бинпоиском, а в качестве проверки
// моделировать процесс ежемесячной выплаты, уменьшая тело кредита
// на разницу между суммой платежа и ежемесячным процентом.

function checkCredit (mpay, params) {
	const [periods, creditsum, mperc] = params;
	for (let i = 0; i < periods.length; i++) {
		let percpay = creditsum * (mperc / 100);
		creditsum -= mpay - percpay;
	}
	return creditsum <= 0;
}

function fbinSeach(l, r, eps, check, checkparams) {
	while (l + eps < r) {
		let m = (l + r) / 2;
		if (check(m, checkparams)) {
			r = m;
		} else {
			l = m;
		}
	}
	return l;
}

let eps = 0.01;
let m = 10000000;
let n = 300;
let monthlypay = fbinSeach(0, m, eps, checkCredit, [n, m, mperc]);
console.log(monthlypay);