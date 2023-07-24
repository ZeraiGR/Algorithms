// Lexicographically Smallest Palindrome
// https://leetcode.com/problems/lexicographically-smallest-palindrome/

// Two Pointers, String

// Brute force
const makeSmallestPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  let res = [];

  if (s.length % 2 !== 0) {
    const n = Math.floor(s.length / 2);
    let mid = s.slice(n, n + 1);
    res.push(mid);
  }

  let leftArr = [];
  let rigthArr = [];
  
  while (left < right) {
    let leftLetter = s[left];
    let rightLetter = s[right];

    if (leftLetter === rightLetter) {
      leftArr.push(rightLetter);
      rigthArr.push(leftLetter);
      left++;
      right--;
      continue;
    }

    if (leftLetter < rightLetter) {
      leftArr.push(leftLetter);
      rigthArr.push(leftLetter);
      left++;
      right--;
      continue;
    }

    if (leftLetter > rightLetter) {
      leftArr.push(rightLetter);
      rigthArr.push(rightLetter);
      left++;
      right--;
    }
  }

  res = [...leftArr, ...res, ...rigthArr.reverse()];

  return res.join('');
};

console.log(makeSmallestPalindrome('egcfe'));

// Simple
const makeSmallestPalindrome2 = function(s) {
  let n = s.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(String.fromCharCode(Math.min(s[i].charCodeAt(0), s[n - 1 - i].charCodeAt(0))));
  }

  return res.join('');
};

console.log(makeSmallestPalindrome2("egcfe"));