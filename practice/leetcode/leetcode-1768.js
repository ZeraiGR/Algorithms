// Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/

// Tags: Two Pointers, String

const mergeAlternately = function(word1, word2) {
  let totalLength = word1.length + word2.length;
  let j = 0;
  let k = 0;
  let res = [];


  for (let i = 0; i < totalLength; i++) {
    if (j < word1.length && i % 2 === 0) {
      res.push(word1[j]);
      j += 1;
    }
    if (k < word2.length && i % 2 === 1) {
      res.push(word2[k]);
      k += 1;
    }
  }

  return res.join('');
};

console.log(mergeAlternately("abc", "pqr")); // apbqcr