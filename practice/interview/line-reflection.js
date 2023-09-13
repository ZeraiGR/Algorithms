// Line Reflection

/*

Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.

Input: [[1,1],[-1,1]]
Output: true

Input: [[1,1],[-1,-1]]
Output: false

*/

function isReflected(points) {
    let minX = Infinity;
    let maxX = -Infinity;
    const map = new Map();

    for (let [x, y] of points) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);

      if (!map.has(x)) {
        map.set(x, new Set());
      }

      map.get(x).add(y);
    }

    const double = minX + maxX;

    for (let [x, y] of points) {
      let simmetricX = double - x;

      if (!map.has(simmetricX)) return false;

      if (!map.get(simmetricX).has(y)) return false;
    }

    return true;
  }