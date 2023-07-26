// Longest Substring with At Least K Repeating Characters
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

// Tags: Hash Table, String, Divide and Conquer, Sliding Window

const longestSubstring = function(s, k) {
    let max = 0; 
    let max_uniqs = (new Set(Array.from(s))).size;

    for (let uniq_lim = 1; uniq_lim <= max_uniqs; uniq_lim++) {
        let l = r = 0;
        let cnt = {[s[l]]: 1};
        let uniq_nums = 1;
        let k_repeated_nums = 0; 

        if (k == 1) {
            k_repeated_nums = 1;
        }

        while (r < s.length) {
          if (uniq_nums > uniq_lim) {
            if (cnt[s[l]] === k) {
              k_repeated_nums--;
            }

            cnt[s[l]]--;

            if (cnt[s[l]] === 0) {
              uniq_nums--;
            }

            l++;
          } else {
            if (uniq_nums === k_repeated_nums) {
              max = Math.max(max, r - l + 1);
            }

            r++;

            if (r < s.length) {
              cnt[s[r]] = (cnt[s[r]] ?? 0) + 1;

              if (cnt[s[r]] === k) {
                k_repeated_nums++;
              }

              if (cnt[s[r]] === 1) {
                uniq_nums++;
              }
            }

          }
        }
    }

    return max;
};

console.log(longestSubstring("aaabb", 3));
console.log(longestSubstring("a", 1));