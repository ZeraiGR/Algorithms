// Single Number

/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1

*/

const singleNumber = function(nums) {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
};