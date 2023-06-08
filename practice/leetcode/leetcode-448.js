// Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Tags: Array, Hash Table

const findDisappearedNumbers = function(nums) {
  let ans = [];
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map[num] = (map[num] ?? 0) + 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) ans.push(i);
  }

  return ans;
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

// Cyclic sort
const findDisappearedNumbers2 = function(nums) {
  let i = 0;

  while (i < nums.length) {
    let pos = nums[i] - 1;
    if (nums[i] !== nums[pos]) {
      let tmp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = tmp;
    } else {
      i++;
    }
  }

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1);
    }
  }

  return res;
};

console.log(findDisappearedNumbers2([4,3,2,6,2,3]));