// Intersection of Multiple Arrays
// https://leetcode.com/problems/intersection-of-multiple-arrays/

// Tags: Array, Hash Table, Counting

const intersection = function(nums) {
  let res = [],
      total = nums.length,
      obj = {};

  for (const num of nums) {
    for (const n of num) {
      obj[n] = (obj[n] ?? 0) + 1;
    }
  }

  Object.entries(obj).forEach(([num, cnt]) => {
    if (cnt === total) res.push(+num);
  });

  return res.sort((a, b) => a - b );
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));