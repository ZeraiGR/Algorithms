// Matrix Diagonal Sum

/*

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

*/

const diagonalSum = function(mat) {
  let res = 0;
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    res += mat[i][i];
    res += mat[i][n - 1 - i];
  }

  if (n % 2) res -= mat[Math.floor(n / 2)][Math.floor(n / 2)];

  return res;
};