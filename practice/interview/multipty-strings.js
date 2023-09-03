// Multiply Strings

/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Input: num1 = "2", num2 = "3"
Output: "6"

Input: num1 = "123", num2 = "456"
Output: "56088"
*/

// [0,0,0,0,0,0]
// 123
// 456

const multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let res = new Array(num1.length + num2.length).fill(0);

  num1 = Array.from(num1).reverse();
  num2 = Array.from(num2).reverse();

  for (let i1 = 0; i1 < num1.length; i1++) {
      for (let i2 = 0; i2 < num2.length; i2++) {
          const digit = Number(num1[i1]) * Number(num2[i2]);
          res[i1+i2] += digit;
          res[i1+i2+1] += Math.floor(res[i1+i2] / 10);
          res[i1+i2] = res[i1+i2] % 10;
      }
  }

  res.reverse();
  let start = 0;

  while (res[start] === 0 && start < res.length) {
      start++;
  }

  return res.slice(start).join('');
};