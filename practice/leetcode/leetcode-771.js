// Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// Tags: Hash Table, String

const numJewelsInStones = function(jewels, stones) {
  let cnt = new Set(jewels);
  let res = 0;

  for (const stone of stones) {
    if (cnt.has(stone)) res++;
  }

  return res;
};