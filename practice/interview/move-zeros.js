// Move Zeroes

/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

*/

const moveZeroes = function(nums) {
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r]) {
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
      l++;
    }
  }
};