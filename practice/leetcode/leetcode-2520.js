// Count the Digits That Divide a Number
// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

// Tags: Math

const countDigits = function(num) {
  let res = 0;
  let cur = num;

  while (cur > 0) {
    let rest = cur % 10;
    cur = Math.trunc(cur / 10);
    if (num % rest === 0) res += 1;
  }


  return res;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));