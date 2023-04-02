// Minimum Time Visiting All Points
// https://leetcode.com/problems/minimum-time-visiting-all-points/

// Tags: Array, Math, Geometry

const minTimeToVisitAllPoints = function(points) {
  let res = 0,
      cur = points[0];

  for (let i = 1; i < points.length; i++) {
    res += CalcMinTime(cur, points[i]);
    cur = points[i];
  }

  return res;
};

function CalcMinTime (coord1, coord2) {
  let [x1, y1] = coord1;
  let [x2, y2] = coord2;

  let x = Math.abs(x1 - x2);
  let y = Math.abs(y2 - y1);

  return Math.max(x, y);
}