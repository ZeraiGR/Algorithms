// Single Number
// https://leetcode.com/problems/single-number/

// Tags: Array, Bit Manipulation

const singleNumber = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map[num] = (map[num] ?? 0) + 1;
  }
  
  for (const [num, cnt] of Object.entries(map)) {
    if (cnt !== 2) return num;
  }
};

// HOR
const singleNumber2 = function(nums) {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
};