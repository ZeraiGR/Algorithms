// Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

// Tags: Array, Hash Table, Stack, Monotonic Stack

const nextGreaterElement = function(nums1, nums2) {
  let res = [];
  const cnt = {};

  for (let i = 0; i < nums2.length; i++) {
    let j = i + 1;

    while (nums2[i] > nums2[j] && j < nums2.length) {
      j++;
    }

    if (nums2[i] > nums2[j] || j === nums2.length) {
      cnt[nums2[i]] = -1;
    } else {
      cnt[nums2[i]] = nums2[j];
    }

  }

  for (const num of nums1) {
    res.push(cnt[num]);
  }

  return res;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));