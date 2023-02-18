// Minimum Sum of Four Digit Number After Splitting Digits
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

// Tags: Math, Greedy, Sorting

const minimumSum = function(num) {
  let arr = String(num).split('').map(n => +n).sort().map(n => n+'');
  const [l1, r1, l2, r2] = arr;
  let l = l1 + l2;
  let r = r1 + r2;
  return +l + +r;
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));