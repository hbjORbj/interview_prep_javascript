/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

var coinChange = function(coins, target) {
    let dp = new Array(target+1).fill(target+1);
    // filling the array with target+1 is good enough because
    // the number of coins to reach target will never exceed target+1
    dp[0] = 0; // dp[i] represents the minimum number of coins to make up amount i
    for (let i = 1; i <= target; i++) {
        let amount = i;
        for (let coin of coins) {
            if (coin <= amount) {
                let prevAmount = amount - coin;
                dp[amount] = Math.min(dp[amount], dp[prevAmount] + 1);
            }
        }
    }
    return dp[target] === target+1 ? -1 : dp[target];
    // Time Complexity: O(k * n) where k = number of coins and n = target
    // Space Complexity: O(n)
};