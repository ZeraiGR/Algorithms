// Interval List Intersections

/*

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Input: firstList = [[1,3],[5,9]], secondList = []
Output: []

*/

const intervalIntersection = function(firstList, secondList) {
  let l = r = 0;
  let res = [];

  while (l < firstList.length && r < secondList.length) {
    let [fStart, fEnd] = firstList[l];
    let [sStart, sEnd] = secondList[r];

    if (fEnd < sStart) {
      l++;
      continue;
    }

    if (sEnd < fStart) {
      r++;
      continue;
    }

    res.push([Math.max(sStart, fStart), Math.min(fEnd, sEnd)]);

    if (fEnd < sEnd) {
      l++;
    } else if (fEnd > sEnd) {
      r++;
    } else {
      l++;
      r++;
    }
    
  }

  return res;
};