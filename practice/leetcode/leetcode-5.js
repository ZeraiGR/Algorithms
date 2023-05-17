// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// Tags: String, Dynamic Programming

const longestPalindrome = function(s) {
  let start = end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(i, i);
    let len2 = expandFromCenter(i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }

  }

  function expandFromCenter(L, R) {
    while (L >= 0 && R <= s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }
  
  return s.slice(start, end + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));


