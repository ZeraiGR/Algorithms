// Climbing Stairs

/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Input: n = 4
Output: 4
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step + 1 step
2. 1 step + 2 steps + 1 step
3. 2 steps + 1 step + 1 step
4. 2 steps + 2 steps
5. 1 step + 1 step + 2 steps

*/

const climbStairs = function(n) {
  let res = [1, 2];

  for (let i = 2; i < n; i++) {
    res[i] = res[i-1] + res[i-2];
  }

  return res[n - 1];
};