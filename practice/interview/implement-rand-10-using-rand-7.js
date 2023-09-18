// Implement Rand10() Using Rand7()

/*

Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.

Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().

Input: n = 1
Output: [2]

Input: n = 2
Output: [2,8]

Input: n = 3
Output: [3,8,10]

*/

const rand10 = function() {
  let i = 7;
  let j = 6;
  while (i > 6) i = rand7();
  while (j > 5) j = rand7();
  if (i % 2 === 0) {
    return j;
  } else {
    return j + 5;
  }
};