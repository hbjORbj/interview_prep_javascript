/*
Best Time to Buy and Sell Stock III

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

/*
left[i] is the maximum possible profit via one transaction during first day to day i
right[i] is the maximum possible profit via one transaction during day i to last day
maxProfit[i] is the maximum possible profit via two transactions, one during first day to day i and the other from day i+1 to last day
    maxProfit[i] = left[i] + right[i+1]
*/
var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  let left = new Array(prices.length);
  let right = new Array(prices.length);
  left[0] = 0;
  let buyingPrice = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buyingPrice);
    left[i] = profit;
    buyingPrice = Math.min(prices[i], buyingPrice);
  }

  profit = 0;
  right[prices.length - 1] = 0;
  let sellingPrice = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    profit = Math.max(profit, sellingPrice - prices[i]);
    right[i] = profit;
    sellingPrice = Math.max(prices[i], sellingPrice);
  }

  let maxProfit = new Array(prices.length);
  maxProfit[prices.length - 1] = left[prices.length - 1];
  for (let i = 0; i < prices.length - 1; i++) {
    maxProfit[i] = left[i] + right[i + 1];
  }
  return Math.max(...maxProfit);
  // T.C: O(N)
  // S.C: O(N)
};
