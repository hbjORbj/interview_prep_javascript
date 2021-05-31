/*
Given a two dimension array, find if there is a path from top left to bottom right.
1 represents an obstacle.

Follow up, what if the maze is very big, the size is millions, what would you do?
*/

/*
Qs:
1. Can I assume that we can only move right or bottom?
*/

/*
First Solution: Recursion, Memoization

1. If we have an obstacle at top left or bottom right, we can't either start traversal or reach the target. Hence, we return false.
2. Use DFS to traverse every possible path starting at top-left and find if we can reach the bottom-right. 
In the function, we will check if given row and given column are valid. We will also check if there is an obstacle
at given row and column. In both these cases, we return false. Then, we check if given row and col is the bottom-right.
If so, return true. Then, we start another dfs traversal from right of current position and bottom of current position.
If one of them is true, we know there is path to the bottom-right from current position.
Lastly, we record to the result of function to a memoization table and return result.

* We will use a 2D array for a memoization table.
*/

function findPath(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return false;
  }
  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    return false;
  }
  let memo = new Array(grid.length).fill(0).map(() => new Array(grid.length));
  return dfs(0, 0, grid, memo);
  // T.C: O(M*N), where M = # of rows, N = # of cols
  // S.C: O(M*N)
}

// Returns true if there is a path to bottom-right of grid from given (row,col); otherwise return false
function dfs(row, col, grid, memo) {
  let height = grid.length,
    width = grid[0].length;
  // validate index and check if there's an obstacle
  if (
    row < 0 ||
    col < 0 ||
    row >= height ||
    col >= width ||
    grid[row][col] === 1
  ) {
    return false;
  }
  // we reached the bottom-right
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return true;
  }
  if (memo[row][col] !== undefined) {
    return memo[row][col];
  }
  // move right or move down
  let res = dfs(row, col + 1, grid, memo) || dfs(row + 1, col, grid, memo);
  // record to memo
  memo[row][col] = res;
  return res;
}

console.log(
  findPath([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ])
);

console.log(
  findPath([
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
  ])
);

/*
Second Solution: Dynamic Programming

READ TILL THE END!

1. If we have an obstacle at top left or bottom right, we can't either start traversal or reach the target. Hence, we return false.
2. We will create a dp table with the same height and width of given grid.
dp[row][col] is true if there is path from (row,col) to the bottom-right; otherwise, false.
3. We certainly know that the dp entry for bottom-right is true. Hence, this will be our base case, and therefore
we will iterate through dp table backwards and fill it.
dp[row][col] = (grid[row][col] === 0) && (dp[row][col+1] || dp[row+1][col]);
For entries in the last row or column, row+1 and col+1 will be out of bounds.
We consider these dp values false since there isn't any path to the right-bottom once you go past its row or column.

The answer will be dp[0][0].

ACTUALLY... do we need a dp table? No! We traverse the grid backwards and once we go past it we no longer use its value. 
Hence, we can replace the entry with a boolean value that tells whether or not it is possible to reach the bottom-right from the entry (row,col) so
that our upcoming entries can use these boolean values for their computation.
*/
function findPath2(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return false;
  }
  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    return false;
  }
  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = grid[0].length - 1; col >= 0; col--) {
      if (row === grid.length - 1 && col === grid[0].length - 1) {
        grid[row][col] = true;
        continue;
      }
      let right = col < grid[0].length - 1 ? grid[row][col + 1] : false;
      let bottom = row < grid.length - 1 ? grid[row + 1][col] : false;
      grid[row][col] = grid[row][col] === 0 && (right || bottom);
    }
  }
  return grid[0][0];
  // T.C: O(M*N)
  // S.C: O(1)
}

console.log(
  findPath2([
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ])
);

console.log(
  findPath2([
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
  ])
);
