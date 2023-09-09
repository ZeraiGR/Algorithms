// Isomorphic Strings

/*

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

*/

const isIsomorphic = function(s, t) {
  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s1.length; i++) {
    let s = s1[i];
    let t = t1[i];

    if (s in mapST && mapST[s] !== t || t in mapTS && mapTS[t] !== s) {
      return false;
    }

    mapST[s] = t;
    mapTS[t] = s;
  }

  return true;
};