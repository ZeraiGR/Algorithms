// Distribute Candies
// https://leetcode.com/problems/distribute-candies/

// Tags: Array, Hash Table

const distributeCandies = function(candyType) {
  let max = candyType.length / 2;
  let uniqs = new Set(candyType).size;

  if (uniqs >= max) return max;

  return uniqs;
};