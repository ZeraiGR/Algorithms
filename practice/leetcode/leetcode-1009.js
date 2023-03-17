// Complement of Base 10 Integer
// https://leetcode.com/problems/complement-of-base-10-integer/

// Tags: Bit manipulation

const bitwiseComplement = function(n) {
  return parseInt(n.toString(2).split('').map(n => n === '1' ? '0' : '1').join(''), 2);
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));