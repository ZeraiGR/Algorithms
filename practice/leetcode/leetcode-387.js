// First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

// Tags: Hash Table, String, Queue, Counting

const firstUniqChar = function(s) {
  let cnt = {};

  for (const char of s) {
    cnt[char] = (cnt(char) ?? 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (cnt[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};