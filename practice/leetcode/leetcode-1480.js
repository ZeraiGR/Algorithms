// Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

// Tags: Array, Prefix Sum

const runningSum = function(nums) {
	let res = [];
	let sum = 0;

  for (let i = 0; i < nums.length; i++){
		sum += nums[i];
		res.push(sum);
	}

	return res;
};

console.log(runningSum([1,1,1,1,1]));