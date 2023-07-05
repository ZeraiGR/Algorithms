// Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/

// Tags: Array, Design, Prefix Sum

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let prefixSum = [0];

  for (let i = 1; i < nums.length + 1; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i-1];
  }

  this.prefixsum = prefixSum;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixsum[right + 1] - this.prefixsum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(0, 2);
var param_2 = obj.sumRange(2, 5);
var param_3 = obj.sumRange(0, 5);

console.log(param_1);
console.log(param_2);
console.log(param_3);