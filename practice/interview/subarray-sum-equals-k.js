// Subarray Sum Equals K

/*

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,1,1], k = 2
Output: 2

Input: nums = [1,2,3], k = 3
Output: 2

*/

const subarraySum = function(nums, k) {
  let res = 0;
  let curSum = 0;
  let prefixSums = { 0: 1 };

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      curSum += num;

      let diff = curSum - k;

      if (diff in prefixSums) {
          res += prefixSums[diff];
      }
      
      prefixSums[curSum] = (prefixSums[curSum] ?? 0) + 1; 
  }

  return res;
};