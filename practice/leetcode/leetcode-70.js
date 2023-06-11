// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Tags: Math, DP, Memoization

const climbStairs = function(n) {
  const iter = fibonachi();
  let res;

  for (let i = 0; i < n; i++) {
    res = iter.next();
  }

  return res.value;
};

function* fibonachi () {
  let a = 1;
  let b = 2;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
