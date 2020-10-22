/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Questions to ask:
1. Does the input array contain integers?
2. Can the input array contain negative integers?
3. If the input array is empty, should I return 0?
4. If the input has only one element, should I return 0?
*/
function maxProfit(prices) {
    if (prices.length <= 1) return 0;
    let buyingPrice = prices[0], maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            let curProfit = prices[i] - buyingPrice;
            maxProfit = Math.max(maxProfit, curProfit);
        } else if (prices[i] < buyingPrice) {
            buyingPrice = prices[i];
        }
    }
    return maxProfit;
}

/*
Test Cases:
[3,7,0,1,2,2,3] => 4
[] => 0
[1] => 0 since we can't perform selling
[2, 1] => 0

Idea:
1. Create two variables, one of which will track the maximum possible profit so far and the other of which will track my buying price.
I initialise maximum profit to zero because we start with no profit, and I initialise my buying price to the first element of the array 
since this is the first possible price I can buy a stock at.
2. Loop over every number in the array from the second element.
Every time I can make a profit (so when the current price is higher than the price I bought), I will compare the maximum profit so far
and the profit I can make through this transaction and update my tracking variable if I can make a higher profit through this transaction.
Also, every time I encounter a price lower that the price I bought, update my buying price to this lower price because I want to maximise my profit.
3. Return the maximum profit.

Time Complexity: O(n)
Space Complexity: O(1)
*/