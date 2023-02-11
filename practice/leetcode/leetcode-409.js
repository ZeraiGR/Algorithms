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

// Official solution

const longestPalindrome2 = function(s) {
	const map = {};
	for (const l of s) map[l] = (map[l] ?? 0) + 1;
  let ans = 0;
	for (const v of Object.values(map)) {
		ans += Math.trunc(v / 2) * 2;
		if (ans % 2 === 0 && v % 2 === 1) ans += 1;
	}
	return ans;
};

console.log(longestPalindrome2('a')); // 1
console.log(longestPalindrome2('bb')); // 2
console.log(longestPalindrome2('ababababa')); // 9