// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map.set(num, i);
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (map.has(target - num) && map.get(target - num) !== i) {
      return [i, map.get(target - num)];
    }
  }
};

const twoSum2 = function(nums, target) {
  const prevMap = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (target - num in prevMap) {
      return [prevMap[target - num], i];
    }

    prevMap[num] = i;
  }

  return;
};