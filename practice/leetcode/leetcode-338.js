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

const countBits2 = function (n) {
  const memo = new Array(n+1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    memo[i] = memo[i >> 1] + i % 2;
  }

  return memo;
}

console.log(countBits(2));
console.log(countBits2(5));