/*
Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.

If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

/*
Dynamic Programming

Solution:
*/

var coinChange = function (coins, amount) {
  // dp[i] is the min # of coins to make up i
  let dp = new Array(amount + 1);
  dp[0] = 0; // base case
  for (let i = 1; i <= amount; i++) {
    let minCoins = Infinity;
    for (let coin of coins) {
      if (i - coin >= 0 && dp[i - coin] !== undefined && dp[i - coin] !== -1) {
        minCoins = Math.min(minCoins, dp[i - coin] + 1);
      }
    }
    dp[i] = minCoins === Infinity ? -1 : minCoins;
  }
  return dp[amount];
  // T.C: O(k*N), k = number of coins, N = amount
  // S.C: O(N)
};

/*
Recursion, Memoization

Solution:

If amount == 0, we need 0 coins (base case)

For each coin, we check if amount - coin can be made up, and if possible, we take the minimum number of coins required. We repeat this until we reach the base case and find the
result.
*/
var coinChange = function (coins, amount) {
  // memo[i] is the min number of coins to make up amount i
  let memo = new Array(amount + 1);
  return coinChangeHelper(coins, amount, memo);
  // T.C: O(k*N), k = number of coins, N = amount
  // S.C: O(N)
};

// returns the min number of coins to make up amount
const coinChangeHelper = (coins, amount, memo) => {
  if (amount === 0) {
    return 0;
  }
  if (memo[amount] !== undefined) {
    return memo[amount];
  }
  let minCoins = Infinity;
  for (let coin of coins) {
    if (amount - coin >= 0) {
      let prevAmountCoins = coinChangeHelper(coins, amount - coin, memo);
      if (prevAmountCoins !== -1) {
        minCoins = Math.min(minCoins, prevAmountCoins + 1);
      }
    }
  }
  if (minCoins === Infinity) {
    minCoins = -1;
  }
  memo[amount] = minCoins;
  return minCoins;
};
