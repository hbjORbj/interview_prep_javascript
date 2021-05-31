/*
Unique Paths III

On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.

Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
*/

/*
Number of squares to visit = number of squares in grid - number of squares with obstacle
because we want to walk over every valid square exactly once.

Let's call this K.

Then, we start dfs at starting position.
During the path, if obstacle is encountered or same square is visited twice or we've already visited K
squares, backtrack.
If K squares have been visited and we are at the ending square, that is one valid path
so we add 1 to our global count variable.
*/
var uniquePathsIII = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let K = 0,
    count = 0,
    startPos,
    endPos;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== -1) K++;
      if (grid[i][j] === 1) startPos = [i, j];
    }
  }
  dfs(startPos[0], startPos[1], K);
  return count;
  // T.C: O(3^(M*N)), it's not 4^(M*N) because except for the first cell, we always expand into 3 directions as
  // we skip the one direction we came from.
  // S.C: O(M*N), call stack can go as deep as number of entries in grid
  function dfs(row, col, remains) {
    if (!validIndex(row, col, grid) || grid[row][col] === -1 || remains === 0) {
      return;
    }
    remains--;
    if (grid[row][col] === 2) {
      if (remains === 0) count++;
      return;
    }
    grid[row][col] = -1;
    for (let [newRow, newCol] of directions(row, col)) {
      dfs(newRow, newCol, remains);
    }
    grid[row][col] = 0;
  }
};

function validIndex(row, col, grid) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function directions(row, col) {
  return [
    [row - 1, col],
    [row, col + 1],
    [row + 1, col],
    [row, col - 1],
  ];
}
