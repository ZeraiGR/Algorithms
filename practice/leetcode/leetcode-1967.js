// 1967. Number of Strings That Appear as Substrings in Word
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
import { assert } from "../../tester.js";

// Tags: String

var numOfStrings = function(patterns, word) {
  return patterns.reduce((acc, pattern) => {
		if (word.includes(pattern)) acc += 1;
		return acc;
	}, 0);
};

assert(1, numOfStrings(["a","abc","bc","d"], "abc"), 3);
assert(2, numOfStrings(["a","b","c"], "aaaaabbbbb"), 2);
assert(3, numOfStrings(["a","a","a"], "ab"), 3);
