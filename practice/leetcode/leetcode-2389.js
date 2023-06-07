// Longest Subsequence With Limited Sum
// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// Tags: Array, Binary Search, Greedy, Sorting, Prefix Sum

// Brute force
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

// Prefix sum + Binary Search
const answerQueries2 = function(nums, queries) {
  // 1 - sorting
  const sortedNums = [...nums].sort((a, b) => a - b);

  // 2 - create prefix sum
  const numsPS = makePrefixSum(sortedNums);

  // 3 - use binary search
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    ans.push(binSearch(0, numsPS.length - 1, numsPS, query) + 1);
  }

  return ans;
}

function binSearch (l, r, arr, query) {
  if (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === query) {
      return mid;
    } else if (arr[mid] > query) {
      return binSearch(l, mid - 1, arr, query);
    } else {
      return binSearch(mid + 1, r, arr, query);
    }
  } else { 
    return r;
  }
}

function makePrefixSum (arr) {
  let sum = [];
  let cur = 0;

  for (let i = 0; i < arr.length; i++) {
    cur += arr[i];
    sum.push(cur);
  }

  return sum;
}

console.log(answerQueries2([4,5,2,1], [3,10,21]));