// Reverse Only Letters
// https://leetcode.com/problems/reverse-only-letters/

// Tags: Two Pointers, String

const reverseOnlyLetters = function(s) {
  let l = 0;
  let r = s.length - 1;
  let res = new Array(s.length);

  while (l <= r) {
    if (!isLetter(s[l])) {
      res[l] = s[l];
      l++;
      continue;
    }

    if (!isLetter(s[r])) {
      res[r] = s[r];
      r--;
      continue;
    }

    res[l] = s[r];
    res[r] = s[l];
    l++;
    r--;
  }

  return res.join('');
};

function isLetter (s) {
  return s.toLowerCase() !== s.toUpperCase();
}

console.log(reverseOnlyLetters("ab-cd"));