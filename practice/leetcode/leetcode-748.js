// Shortest Completing Word
// https://leetcode.com/problems/shortest-completing-word/

// Tags: Array, Hash Table, String

const shortestCompletingWord = function(licensePlate, words) {
  words.reverse();

  let plate = licensePlate.replace(/[\d\s]/gi, '').toLowerCase();
  let cnt = makeCnt(plate);
  let minWordLen = Infinity;
  let res;

  for (const word of words) {
    const wordCnt = makeCnt(word);
    const wordLen = word.length;

    if (checkWord(cnt, wordCnt)) {
      
      if (wordLen <= minWordLen) {
        minWordLen = wordLen;
        res = word;
      }

    }

  }

  return res;
};

function checkWord (cnt1, cnt2) {
  for (const [sym, quantity] of Object.entries(cnt1)) {

    if (cnt2[sym] == null || cnt2[sym] < quantity) {
      return false;
    }
    
  }

  return true;
}

function makeCnt (word) {
  let cnt = {};

  for (const sym of word) {
    cnt[sym] = (cnt[sym] ?? 0) + 1;
  }

  return cnt;
}

// console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));
console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));