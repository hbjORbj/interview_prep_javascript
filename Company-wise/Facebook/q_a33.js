/*
Paint House

There is a row of n houses, where each house can be painted one of three colors: red, blue, or green.

The cost of painting each house with a certain color is different.

You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.

For example, costs[0][0] is the cost of painting house 0 with the color red;

costs[1][2] is the cost of painting house 1 with color green, and so on...

Return the minimum cost to paint all houses.
*/

var minCost = function (costs) {
  if (costs === null || costs.length === 0) {
    return Infinity;
  }
  // costs[i][j] is the minimum cost of painting house so that i-th house is painted color j
  // j=0 is red, j=1 is blue, j=2 is green
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }
  return Math.min(...costs[costs.length - 1]);
  // T.C: O(3N) = O(N)
  // S.C: O(1)
};
