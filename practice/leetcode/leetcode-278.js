// First Bad Version
// https://leetcode.com/problems/first-bad-version/

// Tags: Binary Search, Interactive

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    function check (val) {
      return isBadVersion(val)
    }

    return function(n) {
      return lbinSearch(1, n, check);
    };
};

function lbinSearch (l, r, check) {
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (check(m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}