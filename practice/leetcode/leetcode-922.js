// Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/

// Tags: Array, Two Pointers, Sorting

const sortArrayByParityII = function(nums) {
  let res = [];
  let odd = [];
  let even = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  let k = j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res.push(even[k]);
      k++;
    } else {
      res.push(odd[j]);
      j++;
    }
  }
  
  return res;
};