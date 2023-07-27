// Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

// Tags: Array, Two Pointers

const duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }

  return arr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));