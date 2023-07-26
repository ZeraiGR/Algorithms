// Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Tags: Two Pointers, String, String Matching

// Force
const strStr = function(haystack, needle) {
  let start = needle[0];
  let arr = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === start) {
      arr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let curHaystack = haystack.slice(arr[i]);
    let res = tryToFindIndex(curHaystack, needle);

    if (res != -1) {
      return res + arr[i];
    }
  }

  return -1;
};

function tryToFindIndex (haystack, needle) {
  let r = l = 0;

  while (r < haystack.length) {
    if (needle[l] === haystack[r]) {
      l++;
    } else {
      l = 0;

      if (needle[l] === haystack[r]) {
        l++;
      }

    }

    if (needle.length === l) {
      return r - needle.length + 1;
    }

    r++;
  }

  return -1;
}

console.log(strStr("aabaabbbaabbbbabaaab", "abaa"));

// Embedded
const strStr2 = function(haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }
  return -1;
}

// Sliding window
const strStr3 = function(haystack, needle) {
  let h = haystack.length;
  let n = needle.length;
  let curIndex = 0;

  for (let i = 0; i < h; i++) {
    if (haystack[i] === needle[curIndex]) {
      curIndex++;
    } else {
      i = i - curIndex;
      curIndex = 0;
    }

    if (curIndex === n) {
      return i - n + 1;
    }

  }

  return -1;
}

console.log(strStr3("mississippi", "issip"));