// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Tags: Hash Table, String, Sliding Window

const lengthOfLongestSubstring = function(s) {
  let arr = Array.from(s);
  let state = [];
  let res = 0;

  for (let right = 0; right < arr.length; right++) {
    while (state.includes(arr[right])) {
      state.shift();
    }

    state.push(arr[right]);
    res = Math.max(state.length, res);
  }

  return res;
};

console.log(lengthOfLongestSubstring('abcabcbb'));