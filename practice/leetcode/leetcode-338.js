// Counting Bits
// https://leetcode.com/problems/counting-bits/

// Tags: DP, Bit Manipulation

const countBits = function(n) {
  let res = [];

  for (let i = 0; i <= n; i++) {
    let num = i.toString(2);
    let cnt = 0;
    num.split('').forEach(el => {
      if (el === '1') {
        cnt++;
      }
    });
    res.push(cnt);
  }

  return res;
};

console.log(countBits(2));
console.log(countBits(5));