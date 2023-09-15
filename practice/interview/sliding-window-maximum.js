// Sliding Window Maximum

/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Input: nums = [1], k = 1
Output: [1]

*/

const maxSlidingWindow = function(nums, k) {
  let res = [];
  let deque = []; // indexes
  let l = r = 0;

  while (r < nums.length) {
    while (deque.length > 0 && nums[deque.at(-1)] < nums[r]) {
      deque.pop();
    }

    deque.push(r);

    if (l > deque[0]) {
      deque.shift();
    }

    if (r + 1 >= k) {
      res.push(nums[deque[0]]);
      l++;
    } 

    r++;
  }

  return res;
};