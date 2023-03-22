// Binary Number with Alternating Bits
// https://leetcode.com/problems/binary-number-with-alternating-bits/

// Tags: Bit manipulation

const hasAlternatingBits = function(n) {
  let isAlter = true;
  let arr = n.toString(2).split('');
  let start = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    if (start === cur) isAlter = false;
    start = arr[i];
  }

  return isAlter;
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));