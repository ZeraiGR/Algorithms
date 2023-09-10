// Permutation in String

/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

*/

const checkInclusion = function(s1, s2) {
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    arr1[s1[i].codePointAt() - 97] += 1;
    arr2[s2[i].codePointAt() - 97] += 1;
  }
  
  let matches = 0;

  for (let i = 0; i < 26; i++) {
    if (arr1[i] === arr2[i]) matches++;
  }

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;

    let index = s2[r].codePointAt() - 97;
    // add new sym from right
    arr2[index] += 1;
    if (arr2[index] === arr1[index]) {
      matches += 1;
    } else if (arr1[index] + 1 === arr2[index]) {
      matches -= 1;
    }

    index = s1[l].codePointAt() - 97;
    // delete old sym from left
    arr2[index] -= 1;
    if (arr2[index] === arr1[index]) {
      matches += 1;
    } else if (arr1[index] - 1 === arr2[index]) {
      matches -= 1;
    }

    l++;
  }

  return matches === 26;
};