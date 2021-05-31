/*
Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/

var orangesRotting = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return -1;
  }
  let DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let height = grid.length,
    width = grid[0].length;
  let fresh = 0;
  let queue = [],
    depth = 0;
  // Get the number of fresh oranges at start and
  // collect starting points of BFS traversal
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  if (fresh === 0) {
    return 0;
  }
  while (queue.length > 0) {
    let queueLen = queue.length;
    let rot = 0;
    for (let i = 0; i < queueLen; i++) {
      let [row, col] = queue.shift();
      if (grid[row][col] === 1) {
        rot++;
        grid[row][col] = 2;
      }
      for (let dir of DIRECTIONS) {
        let newRow = row + dir[0],
          newCol = col + dir[1];
        if (
          newRow >= 0 &&
          newRow < height &&
          newCol >= 0 &&
          newCol < width &&
          grid[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol]);
        }
      }
    }
    if (rot > 0) {
      fresh -= rot;
      depth++;
    }
  }
  return fresh === 0 ? depth : -1;
};

/*
Solution

1. Perform BFS traversal at each rotten orange simultaneously
2. Check if there is no fresh orange at the end of traversal
3. The depth of the traversal is equivalent to the number of minutes elapsed

Time Complexity: O(m*n) where m = the number of rows, n = the number of columns
Space Complexity: O(m*n)
*/
