// Maximum Subarray

var maxSubArray = function(nums) {
  let curSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    curSum = Math.max(curSum + num, num);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}