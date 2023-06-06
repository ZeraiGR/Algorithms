// Longest Subsequence With Limited Sum
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// Tags: Array, Binary Search, Greedy, Sorting, Prefix Sum

const answerQueries = function(nums, queries) {
  let res = [];
  let sortedNums = [...nums].sort((a, b) => a - b);
  
  for (let i = 0; i < queries.length; i++) {
    let curQuery = queries[i];
    let cur = 0;
    let cnt = 0;
    
    for (let j = 0; j < sortedNums.length; j++) {
      cur += sortedNums[j];

      if (cur > curQuery) break;
  
      cnt++;
    }

    res.push(cnt);
  }
  return res;
};

console.log(answerQueries([4,5,2,1], [3,10,21]));