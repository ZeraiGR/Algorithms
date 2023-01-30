// Задел под оптимизацию
import { assert } from "../../../tester.js";

// Сгруппировать слова по общим буквам

// Sample input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Sample output: [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]

// Решение здорового человека
function groupWords (words) {
	function keybyword (word) {
		return word.split('').sort().join('');
	}

	const groups = {};
	for (const word of words) {
		let sortedWord = keybyword(word);
		if (!Object.prototype.hasOwnProperty.call(groups, sortedWord)) {
			groups[sortedWord] = [];
		}
		groups[sortedWord].push(word);
	}

	let ans = [];

	Object.keys(groups).forEach(key => {
		ans.push(groups[key]);
	});

	return ans;
}

console.log(groupWords(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Подозрения здорового человека
// Строчка: let sortedWord = word.split('').sort().join('');
// Вдруг слово будет длинное (N)? Сортировка займёт O(N Log N)
// Количество различных букв в слове K <= N, можем посчитать количество
// каждой за O(N) и отсортировать за O(K Log K), теоретически

// Можно сделать задел под оптимизацию и операцию:
// word.split('').sort().join('')
// вынести в отдельную функцию

// Будет тормозить - посмотрим на профилировщике где, и если долго
// считается ключ - легко поправим на что-то более эффективное

// Допустим, напишем, но стоит ли оно того?
// Плюc её можно сломать
function keybyword (word) {
	const symcnt = {};
	for (const sym of word) {
		symcnt[sym] = (symcnt[sym] ?? 0) + 1;
	}
	let lst = [];
	Object.keys(symcnt).sort().forEach(sym => {
		lst.push(sym);
		lst.push(symcnt[sym]+'');
	});
	return lst.join('');
}