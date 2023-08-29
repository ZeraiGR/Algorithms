// Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function(strs) {
  const cache = {};

  for (const str of strs) {
    const key = Array.from(str).sort().join('');

    if (key in cache) {
      cache[key].push(str);
    } else {
      cache[key] = [str];
    }

  }

  return Object.values(cache);
};