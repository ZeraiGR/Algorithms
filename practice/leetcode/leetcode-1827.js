// Minimum Operations to Make the Array Increasing
// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

// Tags: Array, Greedy

const minOperations = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let prev = nums[i-1];
        while (cur <= prev) {
            res += 1;
            cur += 1;
        }
        nums[i] = cur;
    }

    return res;
};