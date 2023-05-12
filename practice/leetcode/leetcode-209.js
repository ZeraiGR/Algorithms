// Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

// Tags: Array, Binary Search, Sliding Window, Prefix Sum

const minSubArrayLen = function(target, nums) {
  let left = 0,
      right = 0,
      sum = 0,
      res = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      let len = right - left + 1;
      if (res === 0 || len < res) res = len;
      sum -= nums[left];
      left++;
    }
    
    right++;
  }

  return res;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));