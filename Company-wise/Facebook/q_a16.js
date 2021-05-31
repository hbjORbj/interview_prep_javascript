/*
Unique Paths II

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.
*/

/*
DP

Solution:
1. If there is an obstacle at the starting point (0,0) or the target point (m-1,n-1), there is zero path because we
can't either start or reach the target. 
2. Else,...Let's suppose we have a m x n table, where table[row][col] is the number of possible paths from (row,col) to the
bottom-right. table[row][col] = (grid[row][col] === 0) ? table[row][col+1] + table[row+1][col] : 1.
If current entry has an obstacle, there is no path from this entry. Else, the number of paths is that from the right + that from the bottom.
3. We certainly know that grid[m-1][n-1] has a path of 1. Hence, this is our base case and therefore we will iterate through grid backwards and record numer of paths to the given table accordingly. We don't need to initalise a new table.
Why? Since we traverse backwards, we don't need the value of traversed entry once it is used. Hence, we will replace its
entry with the number of possible paths so that upcoming entries can use it for computation. 
At the end of iteration, the answer is obstacleGrid[0][0].

Important note: for entries in the last row or the last column, row+1 or col+1 will be out of bounds. We will consider entries out of bounds zero because it is not possible to reach the bottom-right once we go past its row or column.
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) {
    return 0;
  }
  let height = obstacleGrid.length,
    width = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[height - 1][width - 1] === 1) {
    return 0;
  }
  for (let row = height - 1; row >= 0; row--) {
    for (let col = width - 1; col >= 0; col--) {
      if (row === height - 1 && col === width - 1) {
        obstacleGrid[row][col] = 1;
        continue;
      }
      let right = col < width - 1 ? obstacleGrid[row][col + 1] : 0;
      let bottom = row < height - 1 ? obstacleGrid[row + 1][col] : 0;
      obstacleGrid[row][col] =
        obstacleGrid[row][col] === 0 ? right + bottom : 0;
    }
  }
  return obstacleGrid[0][0];
  // T.C: O(M*N)
  // S.C: O(1)
};
