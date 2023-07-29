// Find Common Characters
// https://leetcode.com/problems/find-common-characters/

// Tags: Array, Hash Table, String

const commonChars = function(words) {
  let fistWord = words[0];
  let res = [];
  let cnt = {};

  for (const letter of fistWord) {
    cnt[letter] = (cnt[letter] ?? 0) + 1;
  }

  Object.entries(cnt).forEach(([letter, num]) => {
    let isPassed = true;
    let times = Infinity;

    for (let i = 1; i < words.length; i++) {
      
      const curWord = words[i];
      const regexp = new RegExp(letter, 'g');

      if (curWord.match(regexp) == null) {
        isPassed = false;
      } else {
        times = Math.min(curWord.match(regexp).length, times);
      }

    }

    if (isPassed) {
      for (let i = 0; i < Math.min(times, num); i++) {
        res.push(letter);
      }
    }

  });

  return res;
};

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["cool","lock","cook"]));