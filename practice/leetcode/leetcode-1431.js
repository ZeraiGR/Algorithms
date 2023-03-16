// Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// Tags: Array

const kidsWithCandies = function(candies, extraCandies) {
  let greatest = Math.max(...candies);
  let res = [];
  for (const candy of candies) {
    candy + extraCandies >= greatest ? res.push(true) : res.push(false);
  }
  return res;
};