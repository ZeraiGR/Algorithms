// One Edit Distance

/*

Given two strings S and T, determine if they are both one edit distance apart.
One ediit distance means doing one of these operation:

insert one character in any position of S
delete one character in S
change any one character in S to other character

*/

function isOneEditDistance(s, t) {
  let m = s.length;
  let n = t.length;

  if (Math.abs(m - n) > 1) {
    return false;
  }

  let count = 0;

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (s[i] !== t[j]) {
      if (count === 1) return false;

      if (m > n) {
        i++;
      } else if (m < n) {
        j++;
      } else {
        i++;
        j++;
      }
      
      count++;
    } else {
      i++;
      j++;
    }
  }

  if (i < m || j < n) {
    count++;
  }

  return count === 1;
}