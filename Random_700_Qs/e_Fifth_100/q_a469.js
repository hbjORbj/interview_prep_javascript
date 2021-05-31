/*
Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),

return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

You may assume all four edges of the grid are all surrounded by water.
*/

var numIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfsTraversal(grid, i, j);
        count++;
      }
    }
  }
  return count;
  // T.C: O(M*N)
  // S.C: O(M*N), call stack can go as deep as M*N
};

const dfsTraversal = (grid, row, col) => {
  if (
    row < 0 ||
    col < 0 ||
    row > grid.length - 1 ||
    col > grid[0].length - 1 ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  let DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let dir of DIRECTIONS) {
    dfsTraversal(grid, row + dir[0], col + dir[1]);
  }
};

/*
Iterate through the given matrix and 
when we encounter '1' (land), we initiate DFS traversal starting at
that point. After we visit a land, we mark it as '0' so that we do not
revisit it in the future. Every DFS traversal is equivalent to visiting an island.
*/
