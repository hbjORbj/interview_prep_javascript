/*
Best Time to Buy and Sell Stock II

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

/*
Solution

Profit from Buying - Selling - Re-buying Selling
and
Profit from Buying - Wait for Best price - Selling
are the same. That's why the logic behind this solution.
*/
var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  let profit = 0;
  let buyingPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buyingPrice) {
      profit += prices[i] - buyingPrice;
      buyingPrice = prices[i]; // Re-buying
    } else if (prices[i] < buyingPrice) {
      buyingPrice = prices[i]; // Better price
    }
  }
  return profit;
  // T.C: O(N)
  // S.C: O(1)
};
