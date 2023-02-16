// Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/description/

// Tags: Array, Hash Table, Two Pointers, Binary Search

const getCommon = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let dct = {};

    [...set1.values(), ...set2.values()].forEach(val => dct[val] = (dct[val] ?? 0) + 1);

    let res = -1;

    for (const [val, cnt] of Object.entries(dct)) {
        if (cnt > 1) {
            res = val;
            break;
        }
    }

    return res;
};