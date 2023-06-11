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

const maxProfit2 = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let curPrice = prices[i];

    if (curPrice < minPrice) {
      minPrice = curPrice;
    } else {
      let curProfit = curPrice - minPrice;

      if (curProfit > maxProfit) {
        maxProfit = curProfit;
      }

    }
  }

  return maxProfit;
}

console.log('1 ', maxProfit2([7,1,5,3,6,4])); // 5
console.log('2 ', maxProfit2([7,6,4,3,1])); // 0
console.log('3 ', maxProfit2([2,4,1])); // 2

const maxProfit3 = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];

    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }

  return maxProfit;
}