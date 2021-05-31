/*
Maximum Length of Pair Chain

You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.
*/

/*
[1,2] -> [3,4] because 2 < 3

We can draw a directed acyclic graph, where a pair [a,b] is directed to
another pair [c,d] if b < c.

We need to find the longest possible path
*/
var findLongestChain = function (pairs) {
  // Pairs should be sorted because we want to find a pair with a bigger number
  // as late as possible so that we can obtain a chain that contains all smaller pairs
  pairs.sort((a, b) => a[0] - b[0]);

  // dp[i] is the length of longest chain ending at index i
  let dp = new Array(pairs.length);
  for (let i = 0; i < pairs.length; i++) {
    // Obtain the length of longest chain ending at index i
    let lenOfChain = 1;
    for (let j = 0; j < i; j++) {
      // chain is possible when the following condition is satisfied
      if (pairs[j][1] < pairs[i][0]) {
        lenOfChain = Math.max(lenOfChain, dp[j] + 1);
      }
    }
    dp[i] = lenOfChain;
  }
  return Math.max(...dp);
  // T.C: O(N^2)
  // S.C: O(N)
};
