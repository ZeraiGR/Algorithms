// Keyboard Row
// https://leetcode.com/problems/keyboard-row/

// Tags: Array, Hash Table, String

const findWords = function(words) {
  return words.filter(isOnlyRow);
};

function isOnlyRow (word) {
  let firstLetter = word[0];

  let curGroup = getGroups(firstLetter);

  for (let i = 1; i < word.length; i++) {
    if (getGroups(word[i]) != curGroup) return false;
  }

  return true;
}

function getGroups (l) {
  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";

  if (firstRow.includes(l.toLowerCase())) {
    return 1;
  } else if (secondRow.includes(l.toLowerCase())) {
    return 2;
  } else if (thirdRow.includes(l.toLowerCase())) {
    return 3;
  }
}