// Maximum Difference Between Increasing Elements
// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

// Tags: Array
    
// [7,1,5,4]
//      ^
const maximumDifference = function(nums) {
  let res = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];
      if (diff > 0) res = Math.max(res, diff);
    }
  }
  return res;
};

console.log(maximumDifference([7,1,5,4]));
console.log(maximumDifference([9,4,3,2]));
console.log(maximumDifference([1,5,2,10]));