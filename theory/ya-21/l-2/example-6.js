// Линейный поиск
import { assert } from "../../../tester.js";

// Дана последовательность слов
// Вывести все самые короткие слова через пробел

// No effective way
function shortwords (words) {
	let minlen = words[0].length;
	for (const word of words) {
		if (word.length < minlen) {
			minlen = word.length;
		}
	}
	let ans = '';
	for (const word of words) {
		if (word.length === minlen) {
			ans += word + ' '; // т.к строка - неизменяемый объект, то каждый раз создаётся новая строка в памяти, очень медленно
		}
	}
	return ans;
}

// More effective way
function shortwords2 (words) {
	let minlen = words[0].length;
	for (const word of words) {
		if (word.length < minlen) {
			minlen = word.length;
		}
	}
	let ans = [];
	for (const word of words) {
		if (word.length === minlen) {
			ans.push(word);
		}
	}
	return ans.join(' ');
}

assert(1, shortwords(['aa', 'bbb', 'a', 'b', 'c', 'ddd']), 'a b c ');
assert(2, shortwords(['a', 'bb', 'ccc', 'dddd', 'eeeeee']), 'a ');
assert(3, shortwords(['a', 'bb', 'ccc', 'dddd', 'e']), 'a e ');
assert(4, shortwords(['a', 'a', 'a']), 'a a a ');
assert(5, shortwords(['vav', 'wow', 'lol', 'lalala']), 'vav wow lol ');

assert(6, shortwords2(['aa', 'bbb', 'a', 'b', 'c', 'ddd']), 'a b c');
assert(7, shortwords2(['a', 'bb', 'ccc', 'dddd', 'eeeeee']), 'a');
assert(8, shortwords2(['a', 'bb', 'ccc', 'dddd', 'e']), 'a e');
assert(9, shortwords2(['a', 'a', 'a']), 'a a a');
assert(10, shortwords2(['vav', 'wow', 'lol', 'lalala']), 'vav wow lol');