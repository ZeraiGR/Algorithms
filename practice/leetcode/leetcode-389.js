// Find the Difference
// https://leetcode.com/problems/find-the-difference/

// Tags: Hash Table, String, Bit Manipulation, Sorting

const findTheDifference = function(s, t) {
  let cnt = {};

  for (let char of s) {
    cnt[char] = (cnt[char] ?? 0) + 1;
  }

  for (let char of t) {
    cnt[char]--;

    if (cnt[char] === 0) delete cnt[char];
  }

  return Object.keys(cnt)[0];
};