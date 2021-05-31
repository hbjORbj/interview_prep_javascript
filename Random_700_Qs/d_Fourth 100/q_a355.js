/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

// Without creating a dp table
var minPathSum = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    let height = grid.length, width = grid[0].length;
    // we will mutate the given grid so that grid[i][j] is the minimum sum of path to (i, j)
    // for the first row, the minimum path is coming from left so we simply add the previous left sum
    // for the first column, the minimum path is coming from up so we simply add the previous upper sum
    // else, we take the minimum of sum from up and sum from left and add current position's number to it
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i == 0) grid[i][j] += j > 0 ? grid[i][j-1] : 0;
            else if (j == 0) grid[i][j] += i > 0 ? grid[i-1][j] : 0;
            else {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[height-1][width-1];
    // Time Complexity: O(m * n)
    // Space Complexity: O(1)
};