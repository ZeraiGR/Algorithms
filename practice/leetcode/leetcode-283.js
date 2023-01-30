// https://leetcode.com/problems/move-zeroes/

// Tags: Array, Two Pointers

// My first colution O(N^2)
const moveZeroes = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
		for(let j = i; j < nums.length - 1; j++) {
			if (nums[j] === 0) {
				nums[j] = nums[j+1];
				nums[j+1] = 0;
			}
		}
	}
};

// Snowball approach
var moveZeroes2 = function(nums) {
	let snowBallSize = 0;
	for (let i = 0; i < nums.length; i++) {
			if (nums[i] === 0) {
					snowBallSize++;
			} else if (snowBallSize > 0) {
					let t = nums[i];
					nums[i] = 0;
					nums[i - snowBallSize] = t;
			}
	}
};

// Two pointers approach
const moveZeroes3 = (nums) => {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
		console.log(nums);
    if (nums[right] !== 0) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
  return nums;
};

//todo https://leetcode.com/problems/move-zeroes/solutions/127441/move-zeroes/