/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 

You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
*/

var maxAreaOfIsland = function(grid) {
    if (grid.length == 0) return 0;
    let height = grid.length, width = grid[0].length;
    let max = 0;
    let visited = new Array(height).fill(0).map(() => new Array(width).fill(false));
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == 1 && visited[row][col] == false) {
                max = Math.max(max, dfs(row, col, visited, grid));
            }
        }
    }
    
    return max;    
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n)
};

// Helper function
function dfs(r, c, visited, grid) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length 
        || visited[r][c] == true || grid[r][c] !== 1) return 0;
    const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
    let count = 1;
    visited[r][c] = true;
    for (let dir of DIRECTIONS) {
        count += dfs(r + dir[0], c + dir[1], visited, grid);
    }
    return count;
}