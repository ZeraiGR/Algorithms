// Longest Subarray of 1's After Deleting One Element

/*

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

*/

const longestSubarray = function(nums) {
  let zeroCounts = 0;
  let res = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    zeroCounts += numr[r] === 0 ? 1 : 0;

    while (zeroCounts > 1) {
      zeroCounts -= numr[l] === 0 ? 1 : 0;
      l++;
    }

    res = Math.max(res, r - l);
  }

  return res;
};