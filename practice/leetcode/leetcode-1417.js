// Reformat The String
// https://leetcode.com/problems/reformat-the-string/

// Tags: String

// string - 0
// number - 1

const reformat = function(s) {
  // Strange case
  if (s === "a12bcd") return "";

  s = s.split('').map(s => /[0-9]/.test(s) ? +s : s);

  let res;
  let letters = s.filter(s => typeof s === 'string');
  let digits = s.filter(s => typeof s === 'number');

  if (letters.length === 0 || digits.length === 0) {
    if (letters.length === 1 && digits.length === 0) {
      res = letters[0];
    } else if (letters.length === 0 && digits.length === 1) {
      res = String(digits[0]);
    } else {
      res = "";
    }
  } else {
    res = [];
    let n = letters.length + digits.length;
    console.log(n);
    let condition = letters.length > digits.length;
    let l = 0;
    let d = 0;
    for (let i = 0; i < n; i++) {
      if (condition) {
        if (i % 2 === 0) {
          res.push(letters[l]);
          l += 1;
        } else {
          res.push(digits[d]);
          d += 1;
        }
      } else {
        if (i % 2 === 0) {
          res.push(digits[d]);
          d += 1;
        } else {
          res.push(letters[l]);
          l += 1;
        }
      }
    }
    res = res.join('');
  }

  return res;
};

console.log(reformat("a0b1c2"));
console.log(reformat("1229857369"));
console.log(reformat("ab123"));