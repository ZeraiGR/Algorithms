// Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

// Tags: Array, Hash Table, String

const uniqueMorseRepresentations = function(words) {
  const morze = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let transformed = [];

  for (const word of words) {
    let encodedWord = [];

    for (const sym of word) {
      const code = sym.charCodeAt(0) - 97;
      encodedWord.push(morze[code]);
    }
    
    transformed.push(encodedWord.join(''));
  }

  return new Set(transformed).size;
};