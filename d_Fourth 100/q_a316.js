/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

You may assume all four edges of the grid are all surrounded by water.
*/

function numOfIslands(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == '1') {
                bfsTraversal(row, col, grid);
                count++;
            }
        }
    }
    return count;
    // Time Complexity: O(m*n), we visit all nodes exactly once
    // Space Complexity: O(m*n), call stack can go as deep as the number of nodes (when the entire grid is
    // one big island)
}

function dfsTraversal(row, col, grid) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == '0') return;
    grid[row][col] = 0;
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    for (let dir of DIRECTIONS) {
        dfsTraversal(row+dir[0], col+dir[1], grid);
    }
}

function bfsTraversal(row, col, grid) {
    let queue = [[row, col]];
    const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
    while (queue.length > 0) {
        let [row, col] = queue.shift();
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length 
            || grid[row][col] == '0') continue;
        grid[row][col] = '0';
        for (let dir of DIRECTIONS) {
            queue.push([row + dir[0], col + dir[1]]);
        }
    }
}