// Find All Anagrams in a String

/*

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

const findAnagrams = function(s, p) {
  let res = [];

  if (p.length > s.length) return res;

  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
      let key1 = getKey(s[i]);
      let key2 = getKey(p[i]);
      arr1[key1]++;
      arr2[key2]++;
  }

  let matches = 0;

  for (let i = 0; i < 26; i++) {
      if (arr1[i] === arr2[i]) matches++;
  }

  let l = 0;
  for (let r = p.length; r < s.length; r++) {
      if (matches === 26) res.push(l);

      let key = getKey(s[r]);
      arr1[key]++;

      if (arr1[key] === arr2[key]) {
          matches++;
      }

      if (arr1[key] === arr2[key] + 1) {
          matches--;
      }

      key = getKey(s[l]);
      arr1[key]--;

      if (arr1[key] === arr2[key]) {
          matches++;
      }

      if (arr1[key] === arr2[key] - 1) {
          matches--;
      }

      l++;
  }   

  if (matches === 26) res.push(l);

  return res;
};

function getKey (sym) {
  return sym.codePointAt() - 97;
}