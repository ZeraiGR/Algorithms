// Count Special Quadruplets
// https://leetcode.com/problems/count-special-quadruplets/

// Tags: Array, Enumeration

const countQuadruplets = function(nums) {
  let ans = 0;

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let n = k + 1; n < nums.length; n++) {
          if (nums[i] + nums[j] + nums[k] === nums[n]){
            ans += 1;
          }
        }
      }
    }
  }

  return ans;
};

console.log(countQuadruplets([1,2,3,6]));
console.log(countQuadruplets([3,3,6,4,5]));
console.log(countQuadruplets([1,1,1,3,5]));