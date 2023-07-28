// Merge Two 2D Arrays by Summing Values
// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

// Tags: Array, Hash Table, Two Pointers

const mergeArrays = function(nums1, nums2) {
  const res = [];

  let r = l = 0;

  while (l < nums1.length || r < nums2.length) {
      if (!nums1[l]) {
          res.push(...nums2.slice(r));
          break;
      }

      if (!nums2[r]) {
          res.push(...nums1.slice(l));
          break;
      }

      let [id1, val1] = nums1[l];
      let [id2, val2] = nums2[r];

      if (id1 == id2) {
          res.push([id1, val1 + val2]);
          r++;
          l++;
      } else if (id1 > id2) {
          res.push([id2, val2]);
          r++;
      } else {
          res.push([id1, val1]);
          l++;
      }
  }

  return res;
};