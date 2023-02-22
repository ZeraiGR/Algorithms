// How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

// Tags: Array, Hash Table, Sorting, Counting

const smallerNumbersThanCurrent = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let cnt = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] !== nums[j] && nums[j] < nums[i]) cnt += 1;
        }
        res.push(cnt);
        cnt = 0;
    }
    return res;
};