// Partition Labels

/*

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Input: s = "eccbbbbdec"
Output: [10]

*/

const partitionLabels = function(s) {
  let lastIndex = {}; // char -> last index in s

  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }
  
  let res = [];
  let size = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    size++;
    let char = s[i];
    end = Math.max(end, lastIndex[char]);

    if (end === i) {
      res.push(size);
      size = 0;
    }
  }

  return res;
};