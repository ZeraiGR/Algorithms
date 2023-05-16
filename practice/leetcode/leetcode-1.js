// Two Sum
// https://leetcode.com/problems/two-sum/

// Tags: Array, Hash Table

function twoSum(nums, target) {
  let left = 0,
      right = nums.length - 1,
      numbers = nums.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);

  while (left < right) {
    let res = numbers[left][0] + numbers[right][0];
    if (res === target) {
      return [numbers[left][1], numbers[right][1]].sort((a, b) => a - b);
    }

    if (res < target) {
      left++;
    } else {
      right--;
    }
  }
}

function twoSum2 (nums, target) {
  let cursor = 1;

  for (let i = 0; i < nums.length; i++) {
    let firstEl = nums[i];

    for (let j = cursor; j < nums.length; j++) {
      let secondEl = nums[j];

      if (firstEl + secondEl === target) {
        return [i, j];
      }

    }

    cursor++;
  }
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
console.log(twoSum2([-1,-2,-3,-4,-5], -8)); // [2,4]