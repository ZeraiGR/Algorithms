// Summary Ranges
// https://leetcode.com/problems/summary-ranges/

// Tags: Array

const summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [String(nums[0])];

  let res = [];
  let temp = [];

  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i-1];
    let cur = nums[i];

    if (prev + 1 === cur) {
      temp.push(prev);
    } else {
      temp.push(prev);
      res.push(temp);
      temp = [];
    }

    if (i === nums.length - 1) {

      if (prev + 1 === cur) {
        temp.push(cur);
        res.push(temp);
        temp = [];
      } else {
        res.push([cur]);
      }

    }

  }

  return res.map(makeRange);
};

function makeRange (arr) {
  if (arr.length === 1) {
    return `${arr[0]}`;
  }

  let start = arr[0];
  let finish = arr.at(-1);

  return `${start}->${finish}`;
}

console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
