// Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// Tags: Hash Table, String, Sliding Window, Counting

const countGoodSubstrings = function(s) {
  const state = {};
  let left = res = 0;

  for (let right = 0; right < s.length; right++) {
    let cur = s[right];

    state[cur] = (state[cur] ?? 0) + 1;

    if (right - left === 3) {
      let leftChar = s[left];
      state[leftChar] -= 1;

      if (state[leftChar] == 0) delete state[leftChar]; 

      left += 1;
    }

    if (Object.keys(state).length === 3) {
      res += 1;
    }
  }

  return res;
};

console.log(countGoodSubstrings('xyzzaz'));
console.log(countGoodSubstrings("aababcabc"));
