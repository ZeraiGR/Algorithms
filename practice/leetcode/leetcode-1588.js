// Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// Tags: Array, Math, Prefix Sum

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let prefixSum = [];
  let curValue = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    curValue += arr[i];
    prefixSum.push(curValue);
  }

  res += prefixSum.at(-1);

  for (let i = 0; i < prefixSum.length; i++) {
    if (i % 2 !== 0) {
      let curQuantity = i + 2;

      if (curQuantity == arr.length) {
        res += prefixSum[i + 1];
      } else {

        for (let j = 0, k = curQuantity - 1; k < prefixSum.length; j++, k++) {
          if (j == 0) {
            res += prefixSum[k];
          } else {
            res += prefixSum[k] - prefixSum[j - 1];
          }
        }

      }

    }
  }

  return res;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));