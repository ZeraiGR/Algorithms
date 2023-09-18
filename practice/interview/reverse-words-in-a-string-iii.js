// Reverse Words in a String III

/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"

*/

const reverseWords = function(s) {
  let res = [];

  for (const str of s.split(' ')) {
    let reversedStr = Array.from(str).reverse().join('');
    res.push(reversedStr);
  }

  return res.join(' ');
};