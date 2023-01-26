// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

// Tags: Array, Hash table, Counting

// Использовалось в решении: 
// Словарь, счётчик по условию, reduce with filter

var numberOfPairs = function(nums) {
	const dct = {};
	let cnt = 0;

	for (const num of nums) {
		if (dct[num]) {
			dct[num]++
		} else {
			dct[num] = 1;
		}
	}

	Object.values(dct).forEach(n => {
		while (n > 1) {
			cnt++;
			n -= 2;
		}
	});


	const leftover = Object.values(dct).map(n => n % 2 !== 0).reduce((prev, cur) => prev + cur, 0);

	return [cnt, leftover];
};

// Tests
console.log(numberOfPairs([1,3,2,1,3,2,2]));
console.log(numberOfPairs([6,5,3]));
console.log(numberOfPairs([1,1]));
console.log(numberOfPairs([0]));