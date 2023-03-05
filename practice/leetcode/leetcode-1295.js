// Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// Tags: Array

const findNumbers = function(nums) {
  let ans = 0;

  for (const num of nums) {
    if (String(num).length % 2 === 0) ans += 1;
  }

  return ans;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));