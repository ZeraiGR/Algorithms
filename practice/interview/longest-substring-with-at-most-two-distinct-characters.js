// Longest Substring with At Most Two Distinct Characters

/*

Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

Input: “eceba”
Output: 3
Explanation:
T is "ece" which its length is 3.

Input: “aaa”
Output: 3

*/

function lengthOfLongestSubstringKDistinct(s, k) {
  let map = new Map();
  let res = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    map.set(s[r], (map.get(s[r]) ?? 0) + 1 );

    while (map.size > 2) {
      map.set(s[l], map.get(s[l]) - 1);
      if (map.get(s[l]) === 0) map.delete(s[l]);
      l++;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
}