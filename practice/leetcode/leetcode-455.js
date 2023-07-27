// Assign Cookies
// https://leetcode.com/problems/assign-cookies/

// Tags: Array, Two Pointers, Greedy, Sorting

const findContentChildren = function(g, s) {
  g.sort((a,b) => a - b);
  s.sort((a,b) => a - b);
  
  let l = r = res = 0;

  while (l < g.length && r < s.length) {
    if (g[l] <= s[r]) {
        res++;
        l++;
        r++;
    } else {
        r++;
    }
  }

  return res;
};