// Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// Tags: Hash Table, String, Sliding Window, Counting

const countGoodSubstrings = function(s) {
  if (s.length < 3) return 0;

  let left = 0,
      right = 2,
      res = 0;
  
  const data = {};

  for (let i = 0; i < 3; i++) {
    data = (data[s[i]] ?? 0) + 1;
  }
  
  if (Object.keys(data).length === 3) res++;

  

};