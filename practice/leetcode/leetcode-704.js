// Binary Search
// https://leetcode.com/problems/binary-search/description/

// Tags: Array, Binary Search

const search = function (nums, target) {
	let ans = lbinsearch(0, nums.length - 1, check, [nums, target]);
	if (nums[ans] !== target) {
		return -1;
	} else {
		return ans;
	}
}

function lbinsearch (l, r, check, checkParams) {
	while (l < r) {
		let m = Math.trunc((l + r) / 2);
		if (check(m, checkParams)) {
			r = m;
		} else {
			l = m + 1;
		}
	}
	return l;
}

function check (m, [nums, target]) {
	return nums[m] >= target;
}