// Crawler Log Folder
// https://leetcode.com/problems/crawler-log-folder/

// Tags: Array, String, Stack

const minOperations = function(logs) {
  let res = 0;

  for (const log of logs) {
    if (res === 0 && log === '../' || log === './') {
    } else if (log !== '../') {
      res += 1;
    } else {
      res -= 1;
    }
  }

  return res;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));
