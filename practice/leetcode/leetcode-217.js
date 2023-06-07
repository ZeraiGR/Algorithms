// Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// Tags: Array, Hash Table, Sorting

// With Set
const containsDuplicate = function(nums) {
  return (new Set(nums)).size !== nums.length;
};

// Without Set
const containsDuplicate2 = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map[num] = (map[num] ?? 0) + 1;
  }

  return Object.keys(map).length !== nums.length;
};

const containsDuplicate3 = function(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;
};
