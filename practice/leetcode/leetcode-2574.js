// Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/

// Tags: Array, Prefix Sum

const leftRightDifference = function(nums) {
  let n = nums.length;
  let prefixSum = new Array(n + 1).fill(0);
  
  for (let i = 1; i < n + 1; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i-1];
  }

  let rigthMax = prefixSum.at(-1);

  let res = [];

  for (let i = 1; i < n + 1; i++) {
    let left = prefixSum[i-1];
    let right;
    
    if (i === n) {
      right = 0;
    } else {
      right = rigthMax - prefixSum[i];
    }

    res.push(Math.abs(left - right));
  }

  return res;
};

console.log(leftRightDifference([10,4,8,3]));