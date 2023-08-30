// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = function(s) {
  let arr = Array.from(s);
  let res = [];
  let curLen = 0;

  for (let i = 0; i < s.length; i++) {
    // odd
    let l = r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > curLen) {
        res = arr.slice(l, r + 1);
        curLen = r - l + 1;
      }
      l--;
      r++;
    }

    // even
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > curLen) {
        res = arr.slice(l, r + 1);
        curLen = r - l + 1;
      }
      l--;
      r++;
    }
  }

  return res.join('');
}