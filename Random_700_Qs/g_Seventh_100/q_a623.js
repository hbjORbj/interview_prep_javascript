/*
Best Time to Buy and Sell Stock with Cooldown

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

// State Machine
var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  // empty[i] is the max profit on day i with the state of no stock
  // empty[i] = Math.max(empty[i-1], sold[i-1])
  let empty = new Array(prices.length);
  // hold[i] is the max profit on day i with the state of holding stock
  // hold[i] = Math.max(hold[i-1], empty[i-1]-prices[i])
  let hold = new Array(prices.length);
  // sold[i] is the max profit on day i with the state of having stock sold on day i
  // sold[i] = hold[i-1] + prices[i]
  let sold = new Array(prices.length);
  empty[0] = 0;
  hold[0] = -prices[0];
  sold[0] = 0;
  for (let i = 1; i < prices.length; i++) {
    empty[i] = Math.max(empty[i - 1], sold[i - 1]);
    hold[i] = Math.max(hold[i - 1], empty[i - 1] - prices[i]);
    sold[i] = hold[i - 1] + prices[i];
  }
  // Among the last entries, hold[i] will be always the worst case,
  // since we are still holding stock and have no way of selling it now
  // as we've reached the last day on Earth
  return Math.max(empty[empty.length - 1], sold[sold.length - 1]);
  // T.C: O(N)
  // S.C: O(N)
};

// DP
var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) {
    return 0;
  }
  let memo = new Map();
  return recurse();
  function recurse(bought = false, stock = 0, idx = 0) {
    if (idx >= prices.length) {
      return 0;
    }
    if (memo.has(`${stock}-${idx}`) && bought === false) {
      return memo.get(`${stock}-${idx}`);
    }
    // buy stock or do nothing
    if (!bought) {
      let res = Math.max(
        recurse(true, prices[idx], idx + 1),
        recurse(bought, stock, idx + 1)
      );
      memo.set(`${stock}-${idx}`, res);
      return res;
    }
    if (bought) {
      // sell stock or do nothing
      let res = Math.max(
        recurse(false, 0, idx + 2) + prices[idx] - stock,
        recurse(bought, stock, idx + 1)
      );
      return res;
    }
  }
};
