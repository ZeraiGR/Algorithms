// Find the Middle Index in Array
// https://leetcode.com/problems/find-the-middle-index-in-array/

// Tags: Array, Prefix Sum

const findMiddleIndex = function(nums) {
  let n = nums.length + 1;
  const prefixSum = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i-1];
  }

  let max = prefixSum.at(-1);

  for (let i = 1; i < n; i++) {
    let left = prefixSum[i-1];
    let right = max - prefixSum[i];

    if (left === right) {
      return i - 1;
    }
  }
  
  return -1;
};

console.log(findMiddleIndex([2,3,-1,8,4]));