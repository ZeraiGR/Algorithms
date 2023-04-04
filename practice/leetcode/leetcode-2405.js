// Optimal Partition of String
// https://leetcode.com/problems/optimal-partition-of-string/

// Tags: 

const partitionString = function(s) {
  let cnt = 0;
  let stack = [];

  s.split('').forEach(s => {
    if (stack.includes(s)) {
      stack = [s];
      cnt += 1;
    } else {
      stack.push(s);
    }
  });

  if (stack.length) cnt += 1;

  return cnt;
};

console.log(partitionString("abacaba"));
console.log(partitionString("ssssss"));