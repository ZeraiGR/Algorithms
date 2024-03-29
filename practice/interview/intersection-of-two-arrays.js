// Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const intersection = function(nums1, nums2) {
  const set = new Set(nums1);
  let res = [];

  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];

    if (set.has(num)) {
      res.push(num);
    }
  }

  return [...new Set(res)];
}