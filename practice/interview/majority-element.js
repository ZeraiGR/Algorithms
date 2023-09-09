// Majority Element

/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

const majorityElement = function(nums) {
  const map = {};
  let res = 0;
  let maxFreq = 0;

  for (let n of nums) {
      map[n] = (map[n] ?? 0) + 1;
      res = map[n] > maxFreq ? n : res;
      maxFreq = Math.max(maxFreq, map[n]);
  }

  return res; 
};

const majorityElementEfficient = function(nums) {
  let res = 0, cnt = 0;

  for (let n of nums) {
    if (cnt == 0) res = n;
    cnt += n === res ? +1 : -1;
  }

  return res;
};