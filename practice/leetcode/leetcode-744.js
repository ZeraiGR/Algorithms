// Find Smallest Letter Greater Than Target
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// Tags: Array, Binary Search

const nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  let res = lBinSearch(left, right, check, target);

  if (letters[res] <= target) {
    return letters[0];
  }

  return letters[res];

  function check (m, tg) {
    return letters[m] > tg;
  }
};

function lBinSearch (l, r, check, checkParams) {
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (check(m, checkParams)) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}

console.log(nextGreatestLetter(["x","x","y","y"], 'z'));
console.log(nextGreatestLetter(["c","f","j"], "j"));