// Count Primes

/*

Given an integer n, return the number of prime numbers that are strictly less than n.

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Input: n = 0
Output: 0

Input: n = 1
Output: 0

*/

const countPrimes = function(n) {
  let res = 0;
  const cieve = new Array(n).fill(false);

  for (let i = 2; i < n; i++) {
    if (!cieve[i]) {
      res++;
      for (let j = i * i; j < n; j += i) {
        cieve[j] = true;
      }
    }
  }

  return res;
};
