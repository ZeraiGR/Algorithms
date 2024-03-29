// Perfect Squares

/*

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/

var numSquares = function(n) {
  let dp = new Array(n+1).fill(n);
  dp[0] = 0;

  for (let target = 1; target <= n; target++) {
    for (let s = 1; s <= target; s++) {
      let square = s * s;
      if (target - square < 0) break;
      dp[target] = Math.min(dp[target], 1 + dp[target - square]);
    }
  }

  return dp[n];
};