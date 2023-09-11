// Valid Anagram

/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  const mapS = {}, mapT = {};

  for (const sym of s) {
    mapS[sym] = (mapS[sym] ?? 0) + 1;
  }

  for (const sym of t) {
    mapT[sym] = (mapT[sym] ?? 0) + 1;
  }

  for (const key in mapS) {
    if (mapS[key] !== mapT[key]) return false; 
  }

  return true;
};