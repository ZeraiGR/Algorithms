// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// Tags: Array, Divide and Conquer, DP

const maxSubArray = function(nums) {
  let cur_max = nums[0];
  let max_num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    cur_max = Math.max(cur_max + num, num);
    max_num = Math.max(max_num, cur_max);
  }

  return max_num;
};