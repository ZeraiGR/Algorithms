// Merge Intervals

/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  
  for (let [start, end] of intervals.slice(1)) {
    const prevEnd = res.at(-1)[1];

    if (start <= prevEnd) {
      res.at(-1)[1] = Math.max(end, prevEnd);
    } else {
      res.push([start, end]);
    }

  }

  return res;
};