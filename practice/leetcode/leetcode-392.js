// Is Subsequence
// https://leetcode.com/problems/is-subsequence/
import { assert } from "../../tester.js";
// Tags: Two pointers, String, Dynamic Programming

const isSubsequence = function(s, t) {
	let merged = [];
  let first1 = 0;
	let first2 = 0;
	for (let i = 0; i < s.length + t.length; i++) {
		if (s[first1] === t[first2]) {
			merged.push(s[first1]);
			first1++;
			first2++;
		} else {
			first2++;
		}
		if (first1 === s.length || first2 === t.length) break;
	}

	return merged.join('') === s;
};

assert(1, isSubsequence("abc", "ahbgdc"), true);
assert(2, isSubsequence("axc", "ahbgdc"), false);
