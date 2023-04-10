// Reverse Bits
// https://leetcode.com/problems/reverse-bits/description/

// Tags: Divide and Conquer, Bit Manipulation

const reverseBits = function(n) {
  n = n.toString(2);
  n = n.split('').reverse().join('').padEnd(32, "0");
  return parseInt(n, 2);
};