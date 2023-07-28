// Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

// Tags: Two Pointers, String, Greedy

var validPalindrome = function(s) {
    if (s.length % 2 != 0 && isPalindrome(s)) {
        return true;
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
        continue;
      }

      if (s[l] !== s[r]) {
        if (isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r))) {
          return true;
        } else {
          return false;
        }
      }

    }

    return true;
};

function isPalindrome (str) {
  return Array.from(str).reverse().join('') === str;
}