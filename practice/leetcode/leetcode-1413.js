// Minimum Value to Get Positive Step by Step Sum
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

// Tags: Array, Prefix Sum

const minStartValue = function(nums) {
  let prefixsum = [],
      sum = 0;

  for (const num of nums) {
    sum += num;
    prefixsum.push(sum);
  }

  let min = Math.min(...prefixsum);

  if (min >= 0) {
    return min;
  }

  return Math.abs(min) + 1;
};