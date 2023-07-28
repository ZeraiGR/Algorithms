// Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/

// Tags: Array, Hash Table, Sorting

const findLHS = function(nums) {
  let first = nums[0];
  if (nums.every(num => num === first)) return 0;

  let variants = [...(new Set(nums))].sort((a,b) => a - b);

  let min = 0, max = 1;
  let res = 0;

  while (max < variants.length) {
    let cur = variants[min];
    let next = variants[max];

    if (next - cur > 1) {
      min++;
      max++;
      continue;
    }

    let cnt = 0;

    for (let num of nums) {
      if (num === cur || num === next) {
        cnt++;
      }
    }

    res = Math.max(res, cnt);

    min++;
    max++;
  }

  return res;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([1,2,3,4]));
console.log(findLHS([1,1,1,1]));