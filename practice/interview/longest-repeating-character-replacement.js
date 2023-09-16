// Longest Repeating Character Replacement

/*

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.

*/

const characterReplacement = function(s, k) {
  let res = 0;
  let l = 0;
  const counter = {};

  for (let r = 0; r < s.length; r++) {
    counter[s[r]] = (counter[s[r]] ?? 0) + 1;

    while ((r - l + 1) - Math.max(...Object.values(counter)) > k) {
      counter[s[l]]--;
      l++;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};