// Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// Tags: Array, Math, Geometry, Sorting, Matrix

const allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  let res = [];

  for (let i = 0; i < rows; i++) {

      for (let j = 0; j < cols; j++) {
        let dist = Math.abs(i - rCenter) + Math.abs(j - cCenter);
        let curDistance = [[i, j], dist];
        res.push(curDistance);
        console.log(dist);
      }

  }

  res.sort((a,b) => a[1] - b[1]);
  res = res.map(([coods, distance]) => coods);

  return res;
};

console.log(allCellsDistOrder(2, 3, 1, 2));
