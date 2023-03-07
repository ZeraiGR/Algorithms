// Find All K-Distant Indices in an Array
// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

// Tags: Array

const findKDistantIndices = function(nums, key, k) {
  let n = nums.length;
  let candidates = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) candidates.push(i);
  }
  for (let i = 0; i < candidates.length; i++) {
    let cand = candidates[i];
    for (let j = 0; j < n; j++) {
      if (Math.abs(j - cand) <= k) res.push(j);
    }
  }
  res = Array.from(new Set(res)).sort((a,b) => a - b);
  return res;
};

console.log(findKDistantIndices([3,4,9,1,3,9,5], 9, 1));
console.log(findKDistantIndices([2,2,2,2,2], 2, 2));