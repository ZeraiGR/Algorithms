// Is Subsequence

/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false

*/

const isSubsequence = function(s, t) {
    let l = r = 0;

    while (l < s.length && r < t.length) {
        if (s[l] === t[r]) {
            l++;
            r++;
        } else {
            r++;
        }
    }

    return l === s.length;
};