// Count Vowel Substrings of a String
// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

// Tags: Hash Table, String

// Brute Force
const countVowelSubstrings = function(word) {
  let n = word.length, ans = 0, set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (word[j] === 'a' || word[j] === 'e' || word[j] === 'i' || word[j] === 'o' || word[j] === 'u') {
        set.add(word[j]);
      } else {
        break;
      }
      if (set.size === 5) ans += 1;
    }
    set.clear();
  }

  return ans;
};

console.log(countVowelSubstrings("aeiouu"));
console.log(countVowelSubstrings("unicornarihan"));
console.log(countVowelSubstrings("cuaieuouac"));

// Sliding Window

const countVowelSubstrings2 = function(word) {
  let j = 0, k = 0, vow = 0, res = 0;
  let m = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
  for (let i = 0; i < word.length; i++) {
    if (m.has(word[i])) {
      m.set(word[i], m.get(word[i]) + 1);
      if (m.get(word[i]) === 1) {
        vow += 1;
      }
      while (vow === 5) {
        m.set(word[k], m.get(word[k]) - 1);
        if (m.get(word[k]) === 0) {
          vow -= 1;
        }
        k += 1;
      }
      res += k - j;
    } else {
      m = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
      vow = 0;
      k = j = i + 1;
    }
  }
  return res;
};

countVowelSubstrings2("cuaieuouac");