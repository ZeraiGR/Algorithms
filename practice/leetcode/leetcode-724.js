// Find Pivot Index
import { assert } from "../../tester.js";
// https://leetcode.com/problems/find-pivot-index/

// Tags: Array, Prefix Sum

const pivotIndex = function(nums) {
  let left = 0;
	let right = nums.slice(1).reduce((a,b) => a+b, 0);
	
	if (left === right) return 0;

	for (let i = 1; i < nums.length; i++) {
		left += nums[i-1];
		right -= nums[i];
		if (left === right) return i;
	}

	return -1;
};

assert(1, pivotIndex([2,1,-1]), 0);
assert(2, pivotIndex([1,7,3,6,5,6]), 3);
assert(3, pivotIndex([1,2,3]), -1);


