// Top K Frequent Words

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

const topKFrequent = function(words, k) {
  words.sort();
  
  const cnt = {};
  const res = [];

  for (let word of words) {
    cnt[word] = (cnt[word] ?? 0) + 1;
  }

  const freq = new Array(words.length + 1);

  for (let i = 0; i < words.length + 1; i++) {
    freq[i] = [];
  }

  Object.entries(cnt).forEach(([word, cnt]) => {
    freq[cnt].push(word);
  });


  for (let i = words.length; i >= 0; i--) {
    for (let j = 0; j < freq[i].length; j++) {
      res.push(freq[i][j]);
      if (res.length === k) {

      }
    }
  }
};