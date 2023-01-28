// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
import { assert } from "../tester.js";

// Tags: Array, Sorting

// O(N^2)
const countElements = function(nums) {
	nums.sort((a, b) => a - b);
	let ans = 0;

	if (nums.length > 2) {
		for (let i = 1; i < nums.length - 1; ++i) {
			let hasLess = nums.some(n => n < nums[i]);
			let hasMore = nums.some(n => n > nums[i]);
			if (hasLess && hasMore) ans++;
		}
	}

	return ans;
};

assert(1, countElements([11,7,2,15]), 2);
assert(2, countElements([-3,3,3,90]), 2);
assert(3, countElements([1,1,2,3]), 1);
assert(4, countElements([1,1,2,2]), 0);
assert(5, countElements([1]), 0);
assert(6, countElements([1, 2]), 0);
assert(7, countElements([1, 2, 3]), 1);

// todo https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1711307/c-o-n-time-o-1-space-100-efficient-3-approaches/