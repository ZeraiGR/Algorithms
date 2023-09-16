// Reverse String

/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

const reverseString = function(s) {
  let l = 0, r = s.length - 1;

  while (l < r) {
    let tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++;
    r--;
  }
};