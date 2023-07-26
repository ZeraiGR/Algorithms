// Check if All the Integers in a Range Are Covered
// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

// Tags: Array, Hash Table, Prefix Sum

// Brute force
const isCovered = function(ranges, left, right) {
  const groups = new Map();

  for (let i = 1; i <= ranges.length; i++) {
    const [start, end] = ranges[i-1];

    let arr = [];

    for (let i = start; i <= end; i++) {
      arr.push(i);
    }

    groups.set(i, new Set(arr));
  }
  
  for (let i = left; i <= right; i++) {
    let isCoreved = false;

    for (let [_, group] of groups) {

      if (group.has(i)) {
        isCoreved = true;
      }

    }

    if (!isCoreved) {
      return false;
    }

  }

  return true;
};

console.log(isCovered([[1,50]], 1, 50));

