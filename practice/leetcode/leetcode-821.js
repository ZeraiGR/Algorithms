// Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/

// Tags: Array, Two Pointers, String

const shortestToChar = function(s, c) {
  let edges = [null];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      edges.push(i);
    }
  }

  let l = 0;
  let r = 1;
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (edges[l] == null && i < edges[r]) {
      res.push(edges[r] - i);
      continue;
    }

    if (i === edges[r]) {
      res.push(0);
      
      r++;
      l++;

      continue;
    }
    
    if (edges[r] == null) {
      res.push(i - edges[l]);
    } else {
      res.push(Math.min(edges[r] - i, i - edges[l]));
    }

  }

  return res;
};

console.log(shortestToChar("loveleetcode", "e"));
console.log(shortestToChar("aaba", "b"));

const shortestToChar2 = function(s, c) {
  let n = s.length;
  let res = [];

  let prev = Infinity;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    res[i] = Math.abs(prev - i);
  }

  prev = Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    res[i] = Math.min(res[i], prev - i);
  }

  return res;
};

console.log(shortestToChar2("loveleetcode", "e"));
console.log(shortestToChar2("aaba", "b"));