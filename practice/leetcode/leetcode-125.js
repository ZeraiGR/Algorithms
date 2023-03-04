// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// Tags: 

const isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  if (s === '') return true;
  let i = 0,
      j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i += 1;
    j -= 1;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));