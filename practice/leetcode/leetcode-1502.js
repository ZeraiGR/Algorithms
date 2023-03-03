// Can Make Arithmetic Progression From Sequence
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

// Tags: Array, Sorting

const canMakeArithmeticProgression = function(arr) {
  arr.sort((a,b) => b-a);
  let diffs = [];

  for (let i = arr.length - 1; i > 0; i--) {
    diffs.push(arr[i-1] - arr[i]);
  }

  let test = diffs[0];

  return diffs.every(n => n === test);
};

console.log(canMakeArithmeticProgression([3,5,1]));
console.log(canMakeArithmeticProgression([1,2,4]));