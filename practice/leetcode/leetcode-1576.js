// Replace All ?'s to Avoid Consecutive Repeating Characters
// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

// Tags: String

const modifyString = function(s) {
  s = s.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  while (s.some(l => l === '?')) {
    let questionIndex = s.indexOf('?');
    let prevLetter = s[questionIndex - 1] ?? null;
    let nextLetter = s[questionIndex + 1] ?? null;
    alphabet = alphabet.filter(l => l !== prevLetter).filter(l => l !== nextLetter);
    s[questionIndex] = alphabet[getRandomInt(1, alphabet.length - 1)];
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  return s.join('');
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(modifyString("?zs"));
console.log(modifyString("ubv?w"));
console.log(modifyString("j?qg??b"));
console.log(modifyString("???????????????????????????????????????????????"));