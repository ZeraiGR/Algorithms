// Number of Distinct Averages
// https://leetcode.com/problems/number-of-distinct-averages/

// Tags: Array, Hash Table, Two Pointers, Sorting

const distinctAverages = function(nums) {
  nums.sort((a, b) => a - b);

  let data = new Set();
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let max = nums[r];
    let min = nums[l];
    data.add((max + min) / 2);
    l++;
    r--;
  }

  return data.size;
};