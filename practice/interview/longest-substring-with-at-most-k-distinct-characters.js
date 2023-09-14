// Longest Substring with At Most K Distinct Characters

/*

Given a string S, find the length of the longest substring T that contains at most k distinct characters.

*/

function lengthOfLongestSubstringKDistinct(s, k) {
  let res = 0;
  let l = 0;
  const counter = new Map();
  for (let r = 0; r < s.length; r++) {
      counter.set(s[r], (counter.get(s[r]) ?? 0) + 1);
      
      while (counter.size > k) {
          counter.set(s[l], counter.get(s[l]) - 1);

          if (counter.get(s[l]) == 0) {
              counter.delete(s[l]);
          }

          l++;
      }
      res = Math.max(res, r - l + 1);
  }

  return res;
}