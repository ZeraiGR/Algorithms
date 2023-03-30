// Make Two Arrays Equal by Reversing Subarrays
// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/

// Tags: Array, Hash Table, Sorting

const canBeEqual = function(target, arr) {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  let res = true;

  for (let i = 0; i < arr.length; i++) {
    if (target[i] !== arr[i]) res = false;
  }

  return res;
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));