// Count Binary Substrings
// https://leetcode.com/problems/count-binary-substrings/

// Tags: Two Pointers, String

const countBinarySubstrings = function(s) {
  let curr = 1, prev = 0, res = 0;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i-1] === s[i]) {
      curr++;
    } else {
      res += Math.min(curr, prev);
      prev = curr;
      curr = 1;
    }
  }

  return res + Math.min(curr, prev);
};