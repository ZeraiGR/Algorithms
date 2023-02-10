// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Tags: Array, Dinamic Programming

const maxProfit = function(prices) {
	let res = 0;
  
	while (prices.length) {
		let min = Math.min(...prices);
		let minIdx = prices.indexOf(min);
		let restPrices = prices.slice(minIdx + 1);
		let restMax = Math.max(...restPrices);
		res = Math.max(res, restMax - min);
		prices = prices.filter(p => p !== min);
	}
	
	return res;
};

console.log('1 ', maxProfit([7,1,5,3,6,4])); // 5
console.log('2 ', maxProfit([7,6,4,3,1])); // 0
console.log('3 ', maxProfit([2,4,1])); // 2