// Long Pressed Name
// https://leetcode.com/problems/long-pressed-name/

// Tags: Two Pointers, String

const isLongPressedName = function(name, typed) {
  let l = r = 0;

  while (r < typed.length) {
    if (name[l] !== typed[r]) return false;

    if (r == typed.length - 1 && name[l+1] != null && Array.from(name.slice(l+1)).some(el => el != typed[r])) return false;

    if (l == name.length - 1 && typed[r+1] != null && Array.from(typed.slice(r+1)).some(el => el != name[l])) return false;

    if (l == name.length - 1) return true;
    
    l++;
    r++;

    while (name[l] !== typed[r] && r < typed.length - 1) {
      r++;
      if (typed[r] != typed[r-1]) break;
    }

  }

  if (l !== name.length - 1 || r < typed.length - 1) {
    return false;
  }

  return true;
};

console.log(isLongPressedName("alex", "aaleexa"));
console.log(isLongPressedName("pyplrz", "ppyypllr"));
console.log(isLongPressedName("kikcxmvzi", "kiikcxxmmvvzz"));
console.log(isLongPressedName("alex", "alexxr"));