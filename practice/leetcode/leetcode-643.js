// Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/

// Tags: Array, Sliding Window

// Brute force
const findMaxAverage = function(nums, k) {
  let ans = Number.MIN_SAFE_INTEGER;


  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }

    let average = sum / k;

    ans = Math.max(average, ans);
  }


  return ans;
};

// Sliding window
const findMaxAverage2 = function(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let res = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(sum, res);
  }

  return res / k;
};

console.log(findMaxAverage2([1,12,-5,-6,50,3], 4));