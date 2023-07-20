// Range Sum Query 2D - Immutable
// https://leetcode.com/problems/range-sum-query-2d-immutable/

// Tags: Array, Design, Matrix, Prefix Sum

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const n = matrix.length,
        m = matrix[0].length;
  
  let prefixSum1R = matrix.map(arr => {
    let res = [];
    let curVal = 0;

    for (let i = 0; i < arr.length; i++) {
      curVal += arr[i];
      res.push(curVal);
    }

    return res;
  });

  let prefixSum2R = new Array(n + 1).fill(null);
  prefixSum2R = prefixSum2R.map(() => {
    return new Array(m + 1).fill(0);
  });
  
  for (let j = 1; j < m + 1; j++) {
    prefixSum2R[1][j] = prefixSum1R[0][j - 1];
  }

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      prefixSum2R[i][j] = prefixSum2R[i-1][j] + prefixSum1R[i-1][j-1];
    }
  }

  this.prefixsum = prefixSum2R;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const matrix = this.prefixsum;
  return matrix[row2 + 1][col2 + 1] - matrix[row1][col2 + 1] - matrix[row2 + 1][col1] + matrix[row1][col1];
};

var obj = new NumMatrix(
  [
    [3, 0, 1, 4, 2], 
    [5, 6, 3, 2, 1], 
    [1, 2, 0, 1, 5], 
    [4, 1, 0, 1, 7], 
    [1, 0, 3, 0, 5]
  ]
);

var obj2 = new NumMatrix(
  [
    [-4, -5]
  ]
);

var obj3 = new NumMatrix(
  [
    [-1, -2, -9,  6],
    [ 8, -9, -3, -6],
    [ 2,  9, -7, -6 ]
  ]
);

const param_1 = obj3.sumRegion(1,3,2,3);
// const param_2 = obj.sumRegion(1, 1, 2, 2);
// const param_3 = obj.sumRegion(1, 2, 2, 4);

console.log(param_1);
// console.log(param_2);
// console.log(param_3);