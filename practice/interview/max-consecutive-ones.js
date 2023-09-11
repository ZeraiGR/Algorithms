// Max Consecutive Ones

/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Input: nums = [1,0,1,1,0,1]
Output: 2

*/

const findMaxConsecutiveOnes = function(nums) {
  let res = 0;
  let curMax = 0;

  for (let num of nums) {
      if (num === 1) {
          curMax++;
          res = Math.max(curMax, res);
      } else {
          curMax = 0;
      }
  }

  return res;
};