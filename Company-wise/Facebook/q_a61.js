/*
Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
*/

/*
Two squares meet => 8 sides => 6 sides (2 sides go away)
*/
var islandPerimeter = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let squares = 0;
  let overlap = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        squares++;
        overlap += computeOverlap(grid, row, col);
        grid[row][col] = 0;
      }
    }
  }
  return squares * 4 - overlap * 2;
};

function computeOverlap(grid, row, col) {
  let DIRECTIONS = [
    [row - 1, col],
    [row, col + 1],
    [row + 1, col],
    [row, col - 1],
  ];
  let overlap = 0;
  for (let [newRow, newCol] of DIRECTIONS) {
    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length &&
      grid[newRow][newCol] === 1
    ) {
      overlap++;
    }
  }
  return overlap;
}
