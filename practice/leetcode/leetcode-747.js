// Largest Number At Least Twice of Others
// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

// Tags: Array, Sorting

const dominantIndex = function(nums) {  
  let sortedNums = [...nums].sort((a, b) => a - b);

  let last = sortedNums.at(-1);
  let prevLast = sortedNums.at(-2);

  if (last / prevLast >= 2) {
    return nums.indexOf(last);
  }

  return -1;
};