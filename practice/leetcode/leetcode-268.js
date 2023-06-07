// Missing Number
// https://leetcode.com/problems/missing-number/

// Tags: Array, Hash Table, Math, Binary Search, Bit Manipuldation, Sorting

const missingNumber = function(nums) {
  let n = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) return i;
  }

  return n;
};

console.log(missingNumber([3,0,1]));

const missingNumber2 = function(nums) {
  let n = nums.length;
  let sum = nums.reduce((acc, el) => acc + el, 0);
  return ((1 + n) * n) / 2 - sum;
};