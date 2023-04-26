// Flatten Deeply Nested Array
// https://leetcode.com/problems/flatten-deeply-nested-array/

// Tags: Frontend (javaScript)

const flat = function (arr, n) {
  let res = [];

  const iter = (arr, x = 0) => {
    if (x === n) {
      for (const elem of arr) res.push(elem);
    } else {
      for (const elem of arr) {
        if (Array.isArray(elem)) {
          iter(elem, x + 1);
        } else {
          res.push(elem);
        }
      }
    }
  }

  iter(arr);

  return res;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));