// Percentage of Letter in String
// https://leetcode.com/problems/percentage-of-letter-in-string/description/

// Tags: String

const percentageLetter = function(s, letter) {
  let total = s.length;
  let target = s.split('').filter(l => l === letter).length;
  return Math.floor(target / total * 100);
};