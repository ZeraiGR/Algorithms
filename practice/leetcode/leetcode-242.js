// Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

// Tags: Hash Table, String, Sorting

const isAnagram = function(s, t) {
  let map = {};
  for (let l of s) map[l] = (map[l] ?? 0) + 1;  
  for (let l of t) map[l] =  (map[l] ?? 0) - 1;
  return Object.values(map).every(n => n === 0);
};