// Sum of Unique Elements
// https://leetcode.com/problems/sum-of-unique-elements/

// Tags: Array, Hash Table, Counting

const sumOfUnique = function(nums) {
  const map = {};

  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1; 
  }

  return Object.entries(map).filter(([num, cnt]) => cnt === 1).map(([num, cnt]) => +num).reduce((acc, item) => acc += item, 0);
};

console.log(sumOfUnique([1,2,3,2]));
console.log(sumOfUnique([1,1,1,1,1]));
console.log(sumOfUnique([1,2,3,4,5]));