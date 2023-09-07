// Valid Palindrome II

/*

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Input: s = "abc"
Output: false

*/

const validPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
        return isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r));
    }
    l++;
    r--;
  }

  return true;
}

function isPalindrome (str) {
  return str === str.split('').reverse().join('');
}