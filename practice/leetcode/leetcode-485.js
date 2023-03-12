// Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/

const findMaxConsecutiveOnes = function(nums) {
  let ans = 0;
  let cnt = 0;
  for (const num of nums) {
    if (num === 1) {
      cnt += 1;
      ans = Math.max(cnt, ans);
    } else {
      cnt = 0;
    }
  }
  return ans;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));