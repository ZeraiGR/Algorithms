// Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/

// Tags: Array, Hash Table, String, Bit Manipulation

const countConsistentStrings = function(allowed, words) {
  allowed = new Set(allowed);
  let res = 0;

  for (const word of words) {
    let isAllowed = true;

    for (const letter of word) {
      if (!allowed.has(letter)) isAllowed = false;
    }

    if (isAllowed) res++;
  }

  return res;
};