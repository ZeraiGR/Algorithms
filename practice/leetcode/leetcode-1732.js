// Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/

// Tags: Array, Prefix Sum

const largestAltitude = function(gain) {
  let n = gain.length + 1;
  const prefixsum = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefixsum[i] = prefixsum[i-1] + gain[i-1];
  }

  return Math.max(...prefixsum);
};