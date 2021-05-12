/*
Number of Distinct Islands

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return the number of distinct islands.
*/

/*
Solution

Iterate through the grid and initiate DFS traversal when 1 is encountered
because it is land (part of island). After visiting each land, mark it as '0' so that
it is not re-visited. Obtain a path signature consisting of U, R, D or L after complete
traversal of an island. If set already has this path signature, count is unchanged. Else, increment count.
*/
var numDistinctIslands = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let pathSigns = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let pathSign = dfsTraversal(grid, i, j, []);
        if (!pathSigns.has(pathSign)) {
          pathSigns.add(pathSign);
          count++;
        }
      }
    }
  }
  return count;
  // T.C: O(M*N)
  // S.C: O(M*N), call stack can go as deep as size of grid
};

const dfsTraversal = (grid, row, col, pathSign) => {
  if (
    row < 0 ||
    row > grid.length - 1 ||
    col < 0 ||
    col > grid[0].length - 1 ||
    grid[row][col] === 0
  ) {
    return;
  }
  grid[row][col] = 0;
  let DIRECTIONS = [
    [-1, 0, "U"],
    [0, 1, "R"],
    [1, 0, "D"],
    [0, -1, "L"],
  ];
  for (let dir of DIRECTIONS) {
    pathSign.push(dir[2]);
    dfsTraversal(grid, row + dir[0], col + dir[1], pathSign);
  }
  return pathSign.join("");
};
