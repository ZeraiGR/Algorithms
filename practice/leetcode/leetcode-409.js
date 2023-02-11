// Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/

// Tags: Hash Table, String, Greedy

const longestPalindrome = function(s) {
  const map = {};
	for (const l of s) map[l] = (map[l] ?? 0) + 1;
	let isOddUsed = false;
	return Object.values(map).sort((a,b) => a-b).reduce((acc, val) => {
		if (val % 2 === 0) {
			acc += val;
		} else if (!isOddUsed) {
			acc += val;
			isOddUsed = true;
		} else if (val > 1) {
			acc += val - 1;
		}

		return acc;
	}, 0);
};

console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('bb')); // 2
console.log(longestPalindrome('ababababa')); // 9