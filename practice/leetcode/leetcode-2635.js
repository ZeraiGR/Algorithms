// Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

// Tags: Frontend (javaScript)

const map = function(arr, fn) {
  let res = [];
  
  let i = 0;
  
  for (el of arr) {
      res.push(fn(+el, i, arr));
      i += 1;
  }

  return res;
};