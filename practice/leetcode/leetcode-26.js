// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Tags: Array, Two Pointers

var removeDuplicates = function(nums) {
    let i = 0;
		let j = 1;

		while (j < nums.length) {
			if (nums[i] === nums[j]) {
				nums.splice(i, 1);
			} else {
				i++;
				j++;
			}
		}

		return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,3,3,4,4,4,4,4,4]));

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//  ^  ^


