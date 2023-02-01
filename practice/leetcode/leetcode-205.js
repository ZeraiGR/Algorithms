// https://leetcode.com/problems/isomorphic-strings
import { assert } from "../../tester.js";
// Tags: String, Hash Table

const isIsomorphic = function(s, t) {
  const hash1 = createHash(s);
  const hash2 = createHash(t);
	console.log(hash1, hash2);
	return hash1 === hash2;
};

function createHash (s) {
	const dct = [];
	return s.split('').reduce((acc, sym, i) => {
		if (dct.includes(sym)) {
			acc.push(dct.indexOf(sym));
		} else {
			acc.push(i);
			dct.push(sym);
		}
		return acc;
	}, []).join('-');
}

assert(1, isIsomorphic("egg", "add"), true);
assert(2, isIsomorphic("foo", "bar"), false);
assert(3, isIsomorphic("paper", "title"), true);
assert(4, isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck"), false);