/*
Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) return 0;
  let buyingPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let possibleProfit = prices[i] - buyingPrice;
    maxProfit = Math.max(maxProfit, possibleProfit);
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }
  }
  return maxProfit;
  // T.C: O(N)
  // S.C: O(1)
};
