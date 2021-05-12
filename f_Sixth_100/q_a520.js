/*
Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/*
[Recursion]

Solution

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed
*/

var climbStairs = function (n, memo = new Array()) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo[n] = res;
  return res;
  // T.C: O(N)
  // S.C: O(N)
};

/*
[DP]

Solution

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
*/
var climbStairs = function (n) {
  let dp = new Array(n + 1);
  (dp[1] = 1), (dp[2] = 2);
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
  // T.C: O(N)
  // S.C: O(N)
};
