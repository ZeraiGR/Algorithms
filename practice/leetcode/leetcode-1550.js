// Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/

// Tags: Array

const threeConsecutiveOdds = function(arr) {
  let cnt = 0;
  let res = false;
  for (const num of arr) {
    num % 2 === 0 ? cnt = 0 : cnt += 1;
    console.log(cnt);
    if (cnt > 2) res = true;
  }
  return res;
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));
console.log(threeConsecutiveOdds([1,1,2,1,1]));