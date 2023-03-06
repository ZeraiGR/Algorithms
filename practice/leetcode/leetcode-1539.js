// Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/

// Tags: Array, Binary Search

const findKthPositive = function(arr, k) {
  let n = arr.length;
  let max = arr[n - 1];
  let missing = [];
  let res = 0;

  for (let i = 0; i < max + 1; i++) {
    if (!arr.includes(i + 1)) missing.push(i+1);
  }

  let maxIndex = missing.indexOf(max + 1)

  if (missing[k-1]) {
    console.log(missing);
    res = missing[k-1];
  } else if (k-1 === maxIndex){
    res = max + 1;
  } else {
    res = max + 1 + (k - 1 - maxIndex);
  }

  return res;
};

console.log(findKthPositive([2,3,4,7,11], 5));
console.log(findKthPositive([1,2,3,4], 2));