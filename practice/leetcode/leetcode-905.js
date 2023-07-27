// Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// Tags: Array, Two Pointers, Sorting

const sortArrayByParity = function(nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 2 === 0) res.push(num);
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 2 !== 0) res.push(num);
  }

  return res;
};

// O(1) space solution
const sortArrayByParity2 = function(nums) {
  let oddIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[oddIndex]] = [nums[oddIndex], nums[i]];
      oddIndex++;
    }
  }

  return nums;
};