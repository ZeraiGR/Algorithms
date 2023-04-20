// Array Reduce Transformation
// https://leetcode.com/problems/array-reduce-transformation/

// Tags: Frontend (javaScript)

const reduce = function(nums, fn, init) {
  let acc = init;
  for (let num of nums) {
    acc = fn(acc, num);
  }
  return acc;
};