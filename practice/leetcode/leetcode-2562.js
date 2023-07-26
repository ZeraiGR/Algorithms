// Find the Array Concatenation Value
// https://leetcode.com/problems/find-the-array-concatenation-value/

// Tags: Array, Two Pointers, Simulation

const findTheArrayConcVal = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = 0;

  while (l <= r) {
    if (l === r) {
      res += nums[l];
      break;
    }

    let num = Number(String(nums[l]) + String(nums[r]));
    res += num;
    
    l++;
    r--;
  }

  return res;
};

console.log(findTheArrayConcVal([5,14,13,8,12]));
