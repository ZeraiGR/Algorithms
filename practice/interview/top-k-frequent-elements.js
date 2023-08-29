// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = function(nums, k) {
  const freq = new Array(nums.length + 1);
  const data = {};
  const res = [];
  
  for (let i = 0; i < freq.length; i++) {
    freq[i] = [];
  }

  for (let num of nums) {
    data[num] = (data[num] ?? 0) + 1;
  }

  Object.entries(data).forEach(([val, cnt]) => {
    freq[cnt].push(val);
  });

  for (let i = nums.length; i >= 0; i--) {
    if (freq[i].length > 0) {
      for (let j = 0; j < freq[i].length; j++) {
        res.push(freq[i][j]);
        if (res.length === k) return res;
      }
    }
  }
};