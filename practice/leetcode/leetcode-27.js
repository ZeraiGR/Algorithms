// Remove Element
// https://leetcode.com/problems/remove-element/

// Tags: Array, Two pointers

const removeElement = function(nums, val) {
  let j = 0;

  while (j < nums.length) {
    if (nums[j] === val) {
      nums.splice(j, 1);
    } else {
      j += 1;
    }
  }

  return nums;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));