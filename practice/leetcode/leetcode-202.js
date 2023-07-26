// Happy Number
// https://leetcode.com/problems/happy-number/

// Tags: Hash Table, Math, Two-pointers

function transformNumber (num) {
  const arr = String(num).split('').map(Number);
  return arr.reduce((acc, cur) => acc + cur ** 2, 0);
}

const isHappy = function(n) {
  let res = transformNumber(n);

  let map = new Set();

  while (res != 1) {
    if (map.has(res)) {
      return false
    }
    map.add(res);
    res = transformNumber(res);
  }

  return true;
};

console.log(isHappy(19));