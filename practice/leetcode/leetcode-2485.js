// Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/

// Tags: Math, Prefix Sum

const pivotInteger = function(n) {
  // [1,2,3,4,5,6,7,8]
  // [0, 1, 3, 6, 10, 15, 21, 28, 36]

  let prefixSum = new Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    prefixSum[i] = prefixSum[i - 1] + i;
  }

  let last = prefixSum[n];

  for (let i = 1; i < n + 1; i++) {
    let left = prefixSum[i];
    let right = last - prefixSum[i - 1];
    
    if (left === right) {
      return i;
    }
  }

  return -1;
};

pivotInteger(8);