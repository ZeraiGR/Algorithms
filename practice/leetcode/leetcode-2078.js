// Two Furthest Houses With Different Colors
// https://leetcode.com/problems/two-furthest-houses-with-different-colors/

// Tags: Array, Greedy

const maxDistance = function(colors) {
  let init = colors[0],
    res1 = 1,
    res2 = 1;

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== init) {
      res1 = i;
    }
  }

  colors.reverse();
  init = colors[0];
  

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] !== init) {
      res2 = i;
    }
  }

  return Math.max(res1, res2);
};

console.log(maxDistance([4,4,4,11,4,4,11,4,4,4,4,4]));