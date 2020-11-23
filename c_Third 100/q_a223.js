/*
Given a 2D grid consists of 0s (land) and 1s (water).

An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.
*/

var closedIsland = function(grid) {
    if (grid.length === 0) return 0;
    let height = grid.length, width = grid[0].length;
    let total = 0;
    for (let row = 0; row < height; row++) {
        if (grid[row][0] == 0) dfs(row, 0, grid);
        if (grid[row][width-1] == 0) dfs(row, width-1, grid);
    }
    for (let col = 0; col < width; col++) {
        if (grid[0][col] == 0) dfs(0, col, grid);
        if (grid[height-1][col] == 0) dfs(height-1, col, grid);
    }
    
    for (let row = 1; row < height-1; row++) {
        for (let col = 1; col < width-1; col++) {
            if (grid[row][col] == 0) {
                dfs(row, col, grid);
                total++;
            }
        }
    }
    return total;
    // Time Complexity: O(m*n), we possibly visit all nodes
    // Space Complexity: O(m*n), call stack can possibly go as deep as the number of nodes
};
    
function dfs(row, col, grid) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length
       || grid[row][col] == 1) return;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    grid[row][col] = 1;
    for (let dir of DIRECTIONS) {
        dfs(row+dir[0], col+dir[1], grid);
    }
}
// Any island that is connected to the borders cannot be a closed island
// So before we check for closed islands, we perform dfs traversal from every land on the borders and mark all connected lands
// Then we scan through the inner matrix (except borders) and if there is zero (land), we initiate dfs traversal from this land and mark all connected lands. 
// These connected are guaranteed to form a closed island (since we pre-processed the matrix) so we increment total by 1.  