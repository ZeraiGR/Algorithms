// Max Consecutive Ones II

/*

Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

*/

function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let l = 0;
  let zeroCount = 0;

  for (let r = 0; r < nums.length; r++) {
    zeroCount += nums[r] === 0 ? 1 : 0;
    
    while (zeroCount > 1) {
      zeroCount -= nums[l] === 0 ? 1 : 0;
      l++;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
}