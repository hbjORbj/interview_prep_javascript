/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/
var maxProfit = function(prices) {
    if (prices.length == 0) return 0;
    let buyingPrice = prices[0], max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            max = Math.max(max, prices[i] - buyingPrice);
        } else {
            buyingPrice = prices[i];
        }
    }
    return max;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};

/*
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/
var maxProfit = function(prices) {
    if (prices.length == 0) return 0;
    let buyingPrice = prices[0];
    let total = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            total += prices[i] - buyingPrice;
            buyingPrice = prices[i];
        } else { // we want our buying price to be as small as possible
            buyingPrice = prices[i];
        }
    }
    return total;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};

/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

var maxProfit = function(prices) {
    let t1Cost = Infinity, t2Cost = Infinity;
    let t1Profit = 0, t2Profit = 0;
    for (let i = 0; i < prices.length; i++) {
        t1Cost = Math.min(t1Cost, prices[i]);
        t1Profit = Math.max(t1Profit, prices[i] - t1Cost);
        
        t2Cost = Math.min(t2Cost, prices[i] - t1Profit);
        t2Profit = Math.max(t2Profit, prices[i] - t2Cost);
    }
    return t2Profit;
};

// Time Complexity: O(N)
// Space Complexity: O(1)