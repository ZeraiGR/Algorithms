// Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// Tags: Array, Hash Table, String, Sorting

const groupAnagrams = function(strs) {
  const cache = {};

  for (const str of strs) {
    let key = Array.from(str).sort().join('');

    if (key in cache) {
      cache[key].push(str);
    } else {
      cache[key] = [str];
    }
  }

  return Object.values(cache);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["a", ""]));


