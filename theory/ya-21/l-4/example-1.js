// Сортировка подсчётом
import { assert } from "../../../tester.js";

// Дано два числа X и Y без ведущих нулей
// Необходимо проверить, можно ли получить первое
// из второго перестановкой цифр

// Хелпер, чтобы поделить число нацело
function div(val, by = 10){
    return (val - val % by) / by;
}

// Решение
// Посчитаем количество вхождений каждой цифры в каждое
// из чисел и сравним. Цифры будем постепенно добывать
// из числа справа с помощью % 10 и // 10

function isDigitPerMutation(x, y) {
	function countDigits (num) {
		const digitCount = new Array(10).fill(0);
		while (num > 0) {
			let lastdigit = num % 10;
			digitCount[lastdigit] += 1;
			num = div(num);
		}
		return digitCount;
	}

	const digitsX = countDigits(x);
	const digitsY = countDigits(y);

	for (let i = 0; i < 10; i++) {
		if (digitsX[i] !== digitsY[i]) return false;
	}

	return true;
}

// Tests
assert(1, isDigitPerMutation(2023, 3202), true);
assert(2, isDigitPerMutation(2024, 3202), false);



