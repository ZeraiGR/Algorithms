// DI String Match
// https://leetcode.com/problems/di-string-match/

// Tags: Array, Two Pointers, String, Greedy

const diStringMatch = function(s) {
  let n = s.length;
  let curI = 0;
  let curD = n;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      res.push(curI);
      curI++;
    } else {
      res.push(curD);
      curD--;
    }
  }

  if (s.at(-1 === 'I')) {
    res.push(curI);
  } else {
    res.push(curD);
  }

  return res;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));