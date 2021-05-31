/*
Number of Ways to Paint N × 3 Grid

You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green

while making sure that no two adjacent cells have the same color

(i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid.

As the answer may grow large, the answer must be computed modulo 109 + 7.
*/

/*
cur123: the total number of ways of painting the grid from first row to current row where current row is 3-colored
cur121: the total number of ways of painting the grid from first row to current row where current row is 2-colored

Possible 123-pattern arrangements after row of 123 pattern: 2
Possible 123-pattern arrangements after row of 121 pattern: 2

Possible 121-pattern arrangements after row of 123 pattern: 2
Possible 121-pattern arrangements after row of 121 pattern: 3

Hence, cur123 = prev123 * 2 + prev121 * 2 and cur121 = prev123 * 2 + prev121 * 3
*/

var numOfWays = function (n) {
  const MOD = Math.pow(10, 9) + 7;
  let prev123 = 6,
    prev121 = 6,
    total = 12;
  for (let i = 2; i <= n; i++) {
    let cur123 = (prev123 * 2 + prev121 * 2) % MOD;
    let cur121 = (prev123 * 2 + prev121 * 3) % MOD;
    total = (cur123 + cur121) % MOD;
    prev123 = cur123;
    prev121 = cur121;
  }
  return total;
  // T.C: O(N)
  // S.C: O(1)
};
