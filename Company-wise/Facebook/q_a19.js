/*
Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

/*
Use DFS to find all possible paths and the sum along the path.
We will need a m x n table where each entry is the minimum path sum from current entry to the bottom-right.
We can express it as follows:
table[row][col] = grid[row][col] + Min(table[row][col+1], table[row+1][col])

We certainly know that table[m-1][n-1] = grid[m-1][n-1]. Hence, this will be our base case and we will start
iterating through grid backwards. For entries in the last row or last column, row+1 or col+1 will be out of bounds.
Entries with out of bounds index have a path sum of Infinity because it is impossible to reach the right-bottom once we
go past its row or column.

After iteration is done, the answer will be table[0][0] which represents the minimum path sum from (0,0) to the bottom-right.

In fact, we don't need a separate table. We can use the given grid. Since we are iterating backwards, once we use the
value in entry, we no longer need it. Hence, we can replace it with the minimum path sum from that entry to the bottom-right and upcoming entries can use these values for its computation.
*/
var minPathSum = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return Infinity;
  }
  let height = grid.length,
    width = grid[0].length;
  for (let row = height - 1; row >= 0; row--) {
    for (let col = width - 1; col >= 0; col--) {
      if (row === height - 1 && col === width - 1) {
        continue;
      }
      let right = col < width - 1 ? grid[row][col + 1] : Infinity;
      let bottom = row < height - 1 ? grid[row + 1][col] : Infinity;
      grid[row][col] = grid[row][col] + Math.min(right, bottom);
    }
  }
  return grid[0][0];
  // T.C: O(M*N), M = # of rows, N = # of columns
  // S.C: O(1)
};
