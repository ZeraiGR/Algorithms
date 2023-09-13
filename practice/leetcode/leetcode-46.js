// Permutations
// https://leetcode.com/problems/permutations/

// Tags: Array, Backtracking

const permute = function(nums) {

  let res = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let curArr = [];





  }

  // 1 2 3 4

  // 1234
  // 1243

  // 1324
  // 1342

  // 1423
  // 1432

  // 2
  // 2
  // 2

  // 3
  // 3
  // 3

  // 4
  // 4
  // 4

};

function calcQuantity (n) {
  let res = n;

  for (let i = n - 1; i > 0; i--) {
    res *= i;
  }

  return res;
}
