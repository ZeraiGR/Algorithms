// Valid Palindrome

/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

const isPalindrome = function(s) {
  let l = 0,
      r = s.length - 1;

  while (l < r) {
    let lSym = s[l];
    let rSym = s[r];

    if (/[^A-Za-z0-9]/.test(lSym)) {
        l++;
        continue;
    }

    if (/[^A-Za-z0-9]/.test(rSym)) {
        r--;
        continue;
    }

    if (lSym.toLowerCase() !== rSym.toLowerCase()) return false;

    l++;
    r--;
  }

  return true;
}