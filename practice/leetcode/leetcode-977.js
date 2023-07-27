// Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// Tags: Array, Two Pointers, Sorting

const sortedSquares = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let curRight = r;
  let res = [];

  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      res[curRight--] = nums[l] ** 2;
      l++;
    } else {
      res[curRight--] = nums[r] ** 2;
      r--;
    }
  }

  return res;
};