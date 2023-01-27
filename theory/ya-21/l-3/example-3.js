// Множества
import { assert } from "../../../tester.js";

// Дан словарь из N слов, длина каждого не превосходит K

// В записи каждого из M слов текста (каждое длиной до K)
// может быть пропущена одна буква. Для каждого слова
// сказать, входит ли оно (возможно, с одной пропущенной
// буквой), в словарь.

// Решение за O(NK + M)
// Выбросим из каждого слова словаря по одной букве всеми
// возможными способами за O(NK) и положим получившиеся
// слова в множества

// Для каждого слова из текста просто проверим, есть ли оно
// в словаре за O(1)

function wordsindict (dictionary, text) {
	const goodwords = new Set(dictionary);
	for (const word of dictionary) {
		for (const delpos of word) {
			let pos = word.indexOf(delpos);
			goodwords.add(word.slice(0, pos) + word.slice(pos+1));
		}
	}
	const ans = [];
	for (const word of text) {
		if (goodwords.has(word)) {
			ans.push(word);
		}
	}
	return ans;
}

console.log(wordsindict(['abcd'], ['abc', 'avafbfba', 'fdsafda', 'fdafdaffd', 'abcd', 'fdafdasf', 'bcd', 'fdafda']));