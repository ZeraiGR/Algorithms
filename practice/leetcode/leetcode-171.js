// Excel Sheet Column Number
// https://leetcode.com/problems/excel-sheet-column-number/

// Tags: Math, String

const titleToNumber = function(columnTitle) {
  let arr = columnTitle.split('').reverse();
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i].charCodeAt() - 64 * Math.pow(26, i);
  }

  return res;
};