// Set Mismatch
// https://leetcode.com/problems/set-mismatch/description/

// Tags: Array, Hash Table, Bit Manipulation, Sorting

const findErrorNums = function(nums) {
    let n = nums.length;
    let cnt = {};
    let dublicate;
    let missing;

    for (const num of nums) {
        cnt[num] = (cnt[num] ?? 0) + 1;
    }

    for (let i = 1; i <= n; i++) {

        if (cnt[i] == null) {
            missing = i;
            continue;
        }

        if (cnt[i] > 1) {
            dublicate = i;
            continue;
        }
    }

    return [dublicate, missing];
};